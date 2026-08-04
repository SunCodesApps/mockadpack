import BannerPreview from "./previews/BannerPreview";
import RectanglePreview from "./previews/RectanglePreview";
import SkyscraperPreview from "./previews/SkyscraperPreview";
import MobilePreview from "./previews/MobilePreview";

function AdPreview({ ad, format }) {
  switch (format.family) {
    case "banner":
      return <BannerPreview ad={ad} format={format} />;

    case "rectangle":
      return <RectanglePreview ad={ad} format={format} />;

    case "skyscraper":
      return <SkyscraperPreview ad={ad} format={format} />;

    case "mobile":
      return <MobilePreview ad={ad} format={format} />;

    default:
      return (
        <div className="rounded border border-red-500 p-4 text-red-500">
          Unsupported format: {format.family}
        </div>
      );
  }
}

export default AdPreview;