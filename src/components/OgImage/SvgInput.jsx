import Textarea from "./Textarea";

function SvgInput({ id, label, value, onChange }) {
  return (
    <Textarea
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      rows={8}
      placeholder="<svg>...</svg>"
    />
  );
}

export default SvgInput;