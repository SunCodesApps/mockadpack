function SkyscraperPreview({ ad, format }) {
  const { fonts, elements } = format;
  const isShort = format.width >= 120;
  return (
    <div
      className="relative overflow-hidden rounded border"
      style={{
        width: format.width,
        height: format.height,
        backgroundColor: ad.bg_color,
        color: ad.text_color,
      }}
    >
      <div
        className="absolute top-2 right-2 rounded px-2 py-1 text-xs"
        style={{color: ad.text_color, fontSize: 14}}
      >
        {format.id}
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 text-center font-bold"
        style={{
          top: elements.company_y,
          fontSize: fonts.company,
        }}
      >
        {ad.company}
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 text-center"
        style={{
          top: elements.category_y,
          fontSize: fonts.category,
          whiteSpace: "pre-line",
        }}
      >
        {ad.category}
      </div>

      <button
        className="absolute left-1/2 -translate-x-1/2 rounded"
        style={{
          top: elements.button_y,
          width: elements.button_width,
          height: elements.button_height,
          backgroundColor: ad.button_color,
          color: ad.button_text_color,
          fontSize: fonts.button,
          fontWeight: 'bold'
        }}
      >
        {ad.button_text}
      </button>

      {fonts.website > 0 && (
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: elements.website_y,
            fontSize: fonts.website,
          }}
        >
          { isShort ? ad.website.replace(/^www\./, '') : ad.website }
        </div>
      )}
    </div>
  );
}

export default SkyscraperPreview;