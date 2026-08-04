import Label from "./Label";

function ColorInput({ id, label, value, onChange }) {
  return (
    <div className="mb-4">
      <Label htmlFor={id}>
        {label}
      </Label>

      <div className="flex items-center gap-3">
        <input
          id={id}
          type="color"
          value={value}
          onChange={onChange}
          className="h-10 w-12 cursor-pointer rounded border border-gray-300"
        />

        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
        />
      </div>
    </div>
  );
}

export default ColorInput;