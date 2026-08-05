function Textarea({
  id,
  label,
  value,
  onChange,
  rows = 6,
  placeholder = "",
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
}

export default Textarea;