import { forwardRef } from "react";
const MobilePreview = forwardRef(({ ad, format }, ref) => {
  const { fonts, elements } = format;
  const isTallMobile = format.height >= 100;

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
        {isTallMobile ? (
          <div className="flex h-full flex-col justify-between p-4">
            <div
              className="truncate font-bold"
              style={{
                fontSize: fonts.company,
                lineHeight: 1,
              }}
            >
              {ad.company}
            </div>

            <div className="flex items-center justify-between gap-2">
              <div
                className="min-w-0 truncate"
                style={{
                  fontSize: fonts.category,
                  lineHeight: 1.1,
                }}
              >
                {ad.category.replace(/\n/g, " ")}
              </div>

              <button
                className="shrink-0 rounded"
                style={{
                  width: elements.button_width,
                  height: elements.button_height,
                  backgroundColor: ad.button_color,
                  color: ad.button_text_color,
                  fontSize: fonts.button,
                }}
              >
                {ad.button_text}
              </button>
            </div>

            {fonts.website > 0 && (
              <div
                className="truncate"
                style={{
                  fontSize: fonts.website,
                  lineHeight: 1,
                }}
              >
                {ad.website}
              </div>
            )}
          </div>
        ) : (
          <div className="flex h-full items-center justify-between px-4">
            <div className="min-w-0 flex-1">
              <div
                className="truncate font-bold"
                style={{
                  fontSize: fonts.company,
                  lineHeight: 1.4,
                }}
              >
                {ad.company}
              </div>

              <div
                className="truncate"
                style={{
                  fontSize: fonts.category,
                  lineHeight: 1.1,
                }}
              >
                {ad.website.replace(/\n/g, " ")}
              </div>
            </div>

            {fonts.website > 0 && (
              <div
                className="mx-2 shrink-0 truncate"
                style={{
                  fontSize: fonts.website,
                }}
              >
                {ad.website}
              </div>
            )}

            <div
              className="rounded px-2 py-1 text-xs"
              style={{ color: ad.text_color, fontSize: 14 }}
            >
              {format.id}
            </div>

            <button
              className="shrink-0 rounded"
              style={{
                width: elements.button_width,
                height: elements.button_height,
                backgroundColor: ad.button_color,
                color: ad.button_text_color,
                fontSize: fonts.button,
                fontWeight: "bold",
              }}
            >
              {ad.button_text}
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

export default MobilePreview;
