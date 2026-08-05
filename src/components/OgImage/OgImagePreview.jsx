import { forwardRef } from "react";

const OgImagePreview = forwardRef(({ ad }, ref) => {
  const header = {
    top: 40,
    left: 30,
    width: 960,
    height: 400,
    gap: 40,
  };

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{
        width: 1200,
        height: 630,
        backgroundColor: ad.background_color,
      }}
    >
      <div
        className="absolute flex items-center"
        style={{
          top: header.top,
          left: header.left,
          width: header.width,
          height: header.height,
          gap: header.gap,
        }}
      >
        {(ad.logo_svg || ad.logo_png) && (
          <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  }}
>
  {ad.logo_svg ? (
    <div
      style={{
        maxWidth: 400,
        maxHeight: 400,
      }}
      dangerouslySetInnerHTML={{
        __html: ad.logo_svg,
      }}
    />
  ) : (
    <img
      src={ad.logo_png}
      alt="Logo"
      style={{
        maxWidth: 400,
        maxHeight: 400,
        objectFit: "contain",
      }}
    />
  )}
</div>
        )}

        <div
          className="font-bold"
          style={{
            fontSize: 48,
            color: ad.title_color,
          }}
        >
          {ad.title}
        </div>
      </div>

      <div
        className="absolute"
        style={{
          top: 400,
          left: 120,
          width: 900,
          fontSize: 36,
          color: ad.subtitle_color,
          whiteSpace: "pre-line",
        }}
      >
        {ad.subtitle}
      </div>

      <div
        className="absolute"
        style={{
          right: 80,
          bottom: 60,
          fontSize: 28,
          color: ad.website_color,
        }}
      >
        {ad.website}
      </div>
    </div>
  );
});

export default OgImagePreview;
