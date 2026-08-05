import React, { useRef, useState } from "react";
import BasePage from "../layouts/BasePage";
import Mock from "../components/mockadpack/Mock";
import FormatSelector from "../components/mockadpack/FormatSelector";
import AdPreview from "../components/mockadpack/AdPreview";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import defaultAds from "../data/defaultAds";
import adFormats from "../config/adFormats";
import BannerPreview from "../components/mockadpack/previews/BannerPreview";
import RectanglePreview from "../components/mockadpack/previews/RectanglePreview";
import SkyscraperPreview from "../components/mockadpack/previews/SkyscraperPreview";
import MobilePreview from "../components/mockadpack/previews/MobilePreview";
import {
  downloadAllCompaniesPack,
  downloadCompanyPack,
} from "../utils/downloadPack";

export default function Home() {
  const [ads, setAds] = useState(defaultAds);
  const [selectedFormats, setSelectedFormats] = useState([
    "160x600",
    "300x250",
    "300x60",
    "320x50",
  ]);
  const updateAd = (index, updatedAd) => {
    const updatedAds = [...ads];

    updatedAds[index] = updatedAd;

    setAds(updatedAds);
  };
  const previewRefs = useRef({});

  return (
    <BasePage
      title="Free Ad Mockup Generator"
      description="Create professional ad mockups for Google Ads, Meta Ads, display banners, and other advertising platforms. Preview and export creatives in multiple formats."
      canonical="https://suncodesapps.github.io/mockadpack/"
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
      {/* hero section */}
      <section className="py-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4">
          <div>
            <h1 className="text-5xl font-bold">MockAdPack</h1>

            <p className="mt-4 text-lg text-gray-600">
              Create professional ad mockups for your campaigns with one click.
            </p>
          </div>
        </div>
      </section>
      {/* MockAdPack Editor */}
      <section className="p-10">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold">MockAdPack Editor</h2>
          <small className="mb-6 block">
            <a href="#preview-and-download">Skip to preview and downloads</a>
          </small>
          <div
            className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
          "
          >
            {ads?.map((ad, index) => (
              <Mock
                key={index}
                ad={ad}
                onChange={(updatedAd) => updateAd(index, updatedAd)}
              />
            ))}
          </div>
          <FormatSelector
            selectedFormats={selectedFormats}
            onChange={setSelectedFormats}
          />
        </div>
      </section>

      {selectedFormats.length > 0 && (
        <>
          <hr />

          {/* Preview Ads */}
          <section className="p-10" id="preview-and-download">
            <div className="flex flex-row  items-center gap-4">
              <h2 className="mb-6 text-2xl font-bold">
                Preview and download your Ads
              </h2>
              <button
                className="mb-6 rounded bg-black px-5 py-2 text-white"
                onClick={() =>
                  downloadAllCompaniesPack(
                    ads,
                    selectedFormats.map((id) => adFormats[id]),
                    previewRefs,
                  )
                }
              >
                <FontAwesomeIcon icon={faDownload} />
                <span className="mx-2">Download All Companies</span>
              </button>
            </div>
            <div className="space-y-10">
              {ads.map((ad, adIndex) => (
                <React.Fragment key={adIndex}>
                  <div className="flex flex-row  items-center gap-4">
                    <h3 className="text-lg font-semibold">
                      {ad.company} Company
                    </h3>
                    <button
                      className="my-3 rounded bg-black text-sm px-3 py-2 text-white"
                      onClick={() =>
                        downloadCompanyPack(
                          ad,
                          selectedFormats.map((id) => adFormats[id]),
                          adIndex,
                          previewRefs,
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faDownload} />
                      <span className="mx-2">Download {ad.company} Pack</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-6">
                    {selectedFormats.map((formatId) => (
                      <AdPreview
                        key={`${adIndex}-${formatId}`}
                        ad={ad}
                        format={adFormats[formatId]}
                        previewRef={(el) =>
                          (previewRefs.current[`${adIndex}-${formatId}`] = el)
                        }
                      />
                    ))}
                  </div>
                  <hr />
                </React.Fragment>
              ))}
            </div>
          </section>
        </>
      )}
    </BasePage>
  );
}