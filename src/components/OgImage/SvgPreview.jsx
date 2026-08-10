import { forwardRef, useEffect, useState } from "react";

const SvgPreview = forwardRef(({ svg }, ref) => {
  const [size, setSize] = useState({
    width: 128,
    height: 128,
  });

  useEffect(() => {
    if (!svg) return;

    const parser = new DOMParser();

    const element = parser.parseFromString(
      svg,
      "image/svg+xml"
    ).documentElement;

    let width = parseFloat(element.getAttribute("width"));
    let height = parseFloat(element.getAttribute("height"));

    if ((!width || !height) && element.getAttribute("viewBox")) {
      const viewBox = element
        .getAttribute("viewBox")
        .split(/\s+/)
        .map(Number);

      width = viewBox[2];
      height = viewBox[3];
    }

    if (width && height) {
      setSize({
        width,
        height,
      });
    }

  }, [svg]);


  return (
    <div
      ref={ref}
      style={{
        width: size.width,
        height: size.height,
        overflow: "hidden",
      }}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: svg,
        }}
      />
    </div>
  );
});

export default SvgPreview;