import adFormats from "../../config/adFormats";

function FormatSelector({ selectedFormats, onChange }) {

  const toggleFormat = (id) => {
    if (selectedFormats.includes(id)) {
      onChange(
        selectedFormats.filter(
          (format) => format !== id
        )
      );
    } else {
      onChange([
        ...selectedFormats,
        id,
      ]);
    }
  };

  return (
    <div className="mb-6">

      <h3 className="mb-3 text-lg font-semibold">
        Ad Formats
      </h3>

      <div className="space-y-2">
        {Object.values(adFormats).map((format) => (
          <label
            key={format.id}
            className="flex items-center gap-2"
          >
            <input
              type="checkbox"
              checked={selectedFormats.includes(format.id)}
              onChange={() => toggleFormat(format.id)}
            />

            <span>
              {format.id}
            </span>

          </label>
        ))}
      </div>

    </div>
  );
}

export default FormatSelector;