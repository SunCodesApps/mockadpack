import { useState } from "react";
import BasePage from "../layouts/BasePage";
import Mock from "../components/mockadpack/Mock";
import FormatSelector from "../components/mockadpack/FormatSelector";
import AdPreview from "../components/mockadpack/AdPreview";

import defaultAds from "../data/defaultAds";
import adFormats from "../config/adFormats";

export default function Home() {
  const [ads, setAds] = useState(defaultAds);
  const [selectedFormats, setSelectedFormats] = useState(["300x250", "728x90"]);
  const updateAd = (index, updatedAd) => {
    const updatedAds = [...ads];

    updatedAds[index] = updatedAd;

    setAds(updatedAds);
  };

  return (
    <BasePage
      title="MockAdPack | Home"
      description="Crie mockups profissionais para anúncios."
      canonical="/"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "MockAdPack Home",
        description: "Crie mockups profissionais para anúncios.",
      }}
    >
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-6 text-2xl font-bold">MockAdPack Editor</h2>
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
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Preview</h2>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Preview</h2>

        <div className="space-y-10">
          {ads.map((ad, adIndex) => (
            <div key={adIndex}>
              <h3 className="mb-4 text-lg font-semibold">{ad.company}</h3>

              <div className="flex flex-wrap gap-6">
                {selectedFormats.map((formatId) => (
                  <AdPreview
                    key={`${adIndex}-${formatId}`}
                    ad={ad}
                    format={adFormats[formatId]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4">
          <div>
            <h1 className="text-5xl font-bold">MockAdPack</h1>

            <p className="mt-4 text-lg text-gray-600">
              Create professional ad mockups for your campaigns with one click.
            </p>
          </div>

          <button className="rounded-lg bg-black px-6 py-3 text-white">
            Explore Packs
          </button>
        </div>
      </section>
    </BasePage>
  );
}
