import SvgInput from "./SvgInput";

function SvgForm({ svg, onChange }) {

  return (
    <div className="rounded-lg border border-gray-200 p-4 shadow-sm">

      <SvgInput
        id="logo_svg"
        label="SVG Logo"
        value={svg}
        onChange={(e) => onChange(e.target.value)}
      />

    </div>
  );
}

export default SvgForm;