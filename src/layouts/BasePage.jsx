import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BasePage({
  title,
  description,
  canonical,
  image,
  robots = "index,follow",
  type = "website",
  structuredData,
  extraHead,
  children
}) {
  return (
    <>
      <Helmet>
        {title && <title>{title} | MockAdPack</title>}

        {description && (
          <meta name="description" content={description} />
        )}

        <meta name="robots" content={robots} />

        <meta property="og:site_name" content="MockAdPack" />
        <meta property="og:type" content={type} />

        {title && (
          <meta property="og:title" content={title} />
        )}

        {description && (
          <meta property="og:description" content={description} />
        )}

        {image && (
          <meta property="og:image" content={image} />
        )}

        {canonical && (
          <>
            <link rel="canonical" href={canonical} />
            <meta property="og:url" content={canonical} />
          </>
        )}

        <meta name="twitter:card" content="summary_large_image" />

        {title && (
          <meta name="twitter:title" content={title} />
        )}

        {description && (
          <meta name="twitter:description" content={description} />
        )}

        {image && (
          <meta name="twitter:image" content={image} />
        )}

        <meta name="author" content="MockAdPack" />
        <meta name="theme-color" content="#000000" />

        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}

        {extraHead}
      </Helmet>

      <Navbar />

      <Container>
        { children }
      </Container>

      <Footer />
    </>
  );
}