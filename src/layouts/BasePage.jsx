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
  children,
}) {
  return (
    <>
      <Helmet
        titleTemplate="%s | MockAdPack"
        defaultTitle="MockAdPack"
      >
        <title>{title}</title>

        {description && (
          <meta name="description" content={description} />
        )}

        <meta name="robots" content={robots} />

        <meta property="og:type" content={type} />

        {title && (
          <meta
            property="og:title"
            content={`${title} | MockAdPack`}
          />
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

        {title && (
          <meta
            name="twitter:title"
            content={`${title} | MockAdPack`}
          />
        )}

        {description && (
          <meta
            name="twitter:description"
            content={description}
          />
        )}

        {image && (
          <meta name="twitter:image" content={image} />
        )}

        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}

        {extraHead}
      </Helmet>

      <Navbar />

      <Container>{children}</Container>

      <Footer />
    </>
  );
}
