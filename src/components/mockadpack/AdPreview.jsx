import { useRef } from "react";
import BannerPreview from "./previews/BannerPreview";
import RectanglePreview from "./previews/RectanglePreview";
import SkyscraperPreview from "./previews/SkyscraperPreview";
import MobilePreview from "./previews/MobilePreview";
import { downloadAd } from "../../utils/downloadAd";

function AdPreview({ ad, format, previewRef }) {
  const localRef = useRef();

  const setRef = (el) => {
    localRef.current = el;
    previewRef?.(el);
  };

  function sanitizeFilename(value) {
    return value
      .replace(/\n/g, " ")
      .replace(/\s+/g, "_")
      .replace(/[^\w\-]/g, "")
      .replace(/_+/g, "_");
  }

  const filename = `${sanitizeFilename(ad.company)}-${sanitizeFilename(ad.category)}-${format.id}`;
  
  const renderPreview = () => {
    switch (format.family) {
      case "banner":
        return <BannerPreview ref={setRef} ad={ad} format={format} />;

      case "rectangle":
        return <RectanglePreview ref={setRef} ad={ad} format={format} />;

      case "skyscraper":
        return <SkyscraperPreview ref={setRef} ad={ad} format={format} />;

      case "mobile":
        return <MobilePreview ref={setRef} ad={ad} format={format} />;

      default:
        return (
          <div className="rounded border border-red-500 p-4 text-red-500">
            Unsupported format: {format.family}
          </div>
        );
    }
  };

  return (
    <div className="inline-flex flex-col items-start">
      {renderPreview()}

      <button
        className="mt-2 rounded bg-black px-3 py-1 text-sm text-white"
        onClick={() => downloadAd(localRef.current, filename)}
      >
        Download
      </button>
    </div>
  );
}

export default AdPreview;