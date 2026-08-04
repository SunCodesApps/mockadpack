function AdPreview({ ad, format }) {
  const { elements, fonts } = format;
  const isHorizontal = format.orientation === "horizontal";

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

      {isHorizontal ? (
        <div className="flex h-full items-center justify-around px-4">

          <strong
            style={{
              fontSize: fonts.company,
            }}
          >
            {ad.company}
          </strong>


          <span
            style={{
              fontSize: fonts.category,
              whiteSpace: "pre-line",
            }}
          >
            {ad.category}
          </span>


          <button
            style={{
              backgroundColor: ad.button_color,
              color: ad.button_text_color,
              fontSize: fonts.button,
              width: elements.button_width,
              height: elements.button_height,
            }}
            className="rounded"
          >
            {ad.button_text}
          </button>

        </div>

      ) : (

        <>
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: elements.company_y,
              fontSize: fonts.company,
            }}
          >
            <strong>
              {ad.company}
            </strong>
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
            }}
          >
            {ad.button_text}
          </button>
        </>

      )}

    </div>
  );
}

export default AdPreview;