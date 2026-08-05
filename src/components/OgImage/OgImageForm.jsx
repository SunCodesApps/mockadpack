import TextInput from "../mockadpack/TextInput";
import ColorInput from "../mockadpack/ColorInput";
import SvgInput from "./SvgInput";
import ImageInput from "./ImageInput";

function OgImageForm({ ad, onChange }) {
  const updateField = (field, value) => {
    onChange({
      ...ad,
      [field]: value,
    });
  };

  return (
    <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
      <TextInput
        id="title"
        label="Title"
        value={ad.title}
        onChange={(e) => updateField("title", e.target.value)}
      />

      <TextInput
        id="subtitle"
        label="Subtitle"
        value={ad.subtitle}
        onChange={(e) => updateField("subtitle", e.target.value)}
      />

      <TextInput
        id="website"
        label="Website"
        value={ad.website}
        onChange={(e) => updateField("website", e.target.value)}
      />

      <ColorInput
        id="background_color"
        label="Background Color"
        value={ad.background_color}
        onChange={(e) => updateField("background_color", e.target.value)}
      />

      <ColorInput
        id="title_color"
        label="Title Color"
        value={ad.title_color}
        onChange={(e) => updateField("title_color", e.target.value)}
      />

      <ColorInput
        id="subtitle_color"
        label="Subtitle Color"
        value={ad.subtitle_color}
        onChange={(e) => updateField("subtitle_color", e.target.value)}
      />

      <ColorInput
        id="website_color"
        label="Website Color"
        value={ad.website_color}
        onChange={(e) => updateField("website_color", e.target.value)}
      />

      <SvgInput
        id="logo_svg"
        label="SVG Logo"
        value={ad.logo_svg}
        onChange={(e) => updateField("logo_svg", e.target.value)}
      />

      <ImageInput
        id="logo_png"
        label="PNG Logo"
        onChange={(value) => updateField("logo_png", value)}
      />
    </div>
  );
}

export default OgImageForm;