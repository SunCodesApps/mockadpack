import { forwardRef } from "react";
const SquarePreview = forwardRef(({ ad, format }, ref) => {
  const { fonts, elements } = format;
  const isTallRectangle = format.height >= 300;
  return (
    <div className="inline-block" style={{
      boxShadow: `0 10px 15px -3px ${ad.bg_color}99, 0 4px 6px -4px ${ad.bg_color}99`
    }}>
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
        <div
          className="absolute top-2 right-2 rounded px-2 py-1 text-xs"
          style={{ color: ad.text_color, fontSize: 14 }}
        >
          {format.id}
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center font-bold"
          style={{
            top: isTallRectangle ? elements.company_y + 20 : elements.company_y,
            fontSize: fonts.company,
          }}
        >
          {ad.company}
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 text-center"
          style={{
            top: isTallRectangle
              ? elements.category_y + 20
              : elements.category_y,
            fontSize: fonts.category,
            whiteSpace: "pre-line",
          }}
        >
          {ad.category}
        </div>

        <button
          className="absolute left-1/2 -translate-x-1/2 rounded"
          style={{
            top: isTallRectangle ? elements.button_y + 80 : elements.button_y,
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

        {fonts.website > 0 && (
          <div
            className={`absolute ${isTallRectangle ? "bottom-12" : "bottom-6"} left-1/2 -translate-x-1/2`}
            style={{
              fontSize: fonts.website,
            }}
          >
            {ad.website}
          </div>
        )}
      </div>
    </div>
  );
});

export default SquarePreview;
