function ImageInput({ id, label, onChange }) {
  const handleChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      onChange(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        id={id}
        type="file"
        accept="image/png"
        onChange={handleChange}
        className="block w-full rounded border border-gray-300 px-3 py-2 text-sm"
      />
    </div>
  );
}

export default ImageInput;