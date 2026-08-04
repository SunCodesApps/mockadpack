import Label from "./Label";

function TextInput({ id, label, value, onChange, placeholder = "" }) {
  return (
    <div className="mb-4">
      <Label htmlFor={id}>
        {label}
      </Label>

      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
      />
    </div>
  );
}

export default TextInput;