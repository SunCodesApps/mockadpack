import React, { useRef, useState } from "react";
import BasePage from "../layouts/BasePage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import OgImageForm from "../components/OgImage/OgImageForm";
import OgImagePreview from "../components/OgImage/OgImagePreview";

import defaultOgImage from "../data/defaultOgImage";

import { downloadAd } from "../utils/downloadAd";

export default function OgImage() {
  const [ad, setAd] = useState(defaultOgImage);
  const previewRef = useRef(null);

  return (
    <BasePage
      title="Free Og Image Generator"
      description="Create your og:image for better sharing your website on social media."
      canonical="https://suncodesapps.github.io/mockadpack/ogimage"
      robots="noindex,nofollow"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "MockAdPack",
        description:
          "Create your og:image for better sharing your website on social media.",
        applicationCategory: "DesignApplication",
        operatingSystem: "Web",
        url: "https://suncodesapps.github.io/mockadpack/ogimage",
      }}
    >
      {/* hero section */}
      <section className="py-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4">
          <div>
            <h1 className="text-5xl font-bold">MockAdPack</h1>

            <p className="mt-4 text-lg text-gray-600">
              Create your og:image here.
            </p>
          </div>
        </div>
      </section>
      {/* MockAdPack Editor */}
      <section className="p-10">
        <OgImageForm ad={ad} onChange={setAd}/>
      </section>  
      <hr />
      <section>
        <div className="p-5 border border-gray-500 bg-gray-200 flex flex-col items-center">
          <OgImagePreview ad={ad} ref={previewRef}/>

          <button
            onClick={() => downloadAd(previewRef.current, "og-image")}
            className="my-6 rounded bg-black px-5 py-2 text-white"
          >
            Download
          </button>
        </div>
      </section>
    </BasePage>
  );
}