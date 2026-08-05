import Label from "./Label";

function FontInput({ id, label, family, size, onFamilyChange, onSizeChange }) {
  return (
    <div className="mb-4">
      <Label htmlFor={`${id}-family`}>{label} Font Family</Label>

      <select
        id={`${id}-family`}
        value={family}
        onChange={onFamilyChange}
        className="mb-2 w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
      >
        <option value="Arial">Arial</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Inter">Inter</option>
        <option value="Roboto">Roboto</option>
      </select>

      <Label htmlFor={`${id}-size`}>{label} Font Size</Label>

      <input
        id={`${id}-size`}
        type="number"
        value={size}
        onChange={onSizeChange}
        className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
      />
    </div>
  );
}

export default FontInput;
