import { forwardRef } from "react";
const BannerPreview = forwardRef(({ ad, format }, ref) => {
  const { elements, fonts } = format;
  const isLongBanner = format.width >= 600;
  return (
    <div className="inline-block shadow-lg shadow-indigo-500/50">
    <div
      className="relative overflow-hidden"
      ref={ref}
      style={{
        width: format.width,
        height: format.height,
        backgroundColor: ad.bg_color,
        color: ad.text_color,
      }}
    >
      <div className={`flex h-full items-center justify-between ${isLongBanner ? 'px-8' : 'px-4'}`}>
        <div className="min-w-0">
          <div
            className="font-bold leading-none truncate"
            style={{ fontSize: fonts.company, lineHeight: isLongBanner ? 1.6 : 1 }}
          >
            {ad.company}
          </div>

          <div
            className="leading-tight truncate"
            style={{ fontSize: fonts.category }}
          >
            {ad.category}
          </div>
        </div>
          
          {fonts.website > 0 && (
            <div
              style={{
                fontSize: fonts.website,
              }}
              className="shrink-0"
            >
              {ad.website}
            </div>
          )}
        <div
          className="rounded px-2 py-1 text-xs"
          style={{color: ad.text_color, fontSize: 14}}
        >
          {format.id}
        </div>
      </div>
        <button
          className="ml-3 shrink-0 rounded font-medium"
          style={{
            width: elements.button_width,
            height: elements.button_height,
            backgroundColor: ad.button_color,
            color: ad.button_text_color,
            fontSize: fonts.button,
            fontWeight: 'bold',
          }}
        >
          {ad.button_text}
        </button>
    </div>
    </div>
  );
});

export default BannerPreview;