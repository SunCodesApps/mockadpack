import React, { useRef, useState } from "react";
import BasePage from "../layouts/BasePage";

export default function NotFound() {
  return (
    <BasePage
      title="Page Not Found | SvgToPng"
      description="The page you are looking for could not be found."
      canonical="https://suncodesapps.github.io/mockadpack/"
      robots="noindex,nofollow"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "MockAdPack",
        description:
          "Free ad mockup generator for creating and exporting advertising creatives for Google Ads, social media, display banners, and multiple advertising platforms.",
        applicationCategory: "DesignApplication",
        operatingSystem: "Web",
        url: "https://suncodesapps.github.io/mockadpack/",
      }}
    >
      {/* Hero */}
      <section className="py-10 mt-20 text-center">
        <h1 className="text-4xl font-bold">MockAdPack - 404 Page not found</h1>

        <p className="mt-4 text-lg text-gray-600">
          Come back to <a href="/">Home </a>
        </p>
      </section>
    </BasePage>
  );
}
