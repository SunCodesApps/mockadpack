import adFormats from "../../config/adFormats";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function FormatSelector({ selectedFormats, onChange }) {
  const platformIcons = {
    google: faGoogle,
    facebook: faFacebook,
    instagram: faInstagram,
    youtube: faYoutube,
  };
  const toggleFormat = (id) => {
    if (selectedFormats.includes(id)) {
      onChange(selectedFormats.filter((format) => format !== id));
    } else {
      onChange([...selectedFormats, id]);
    }
  };
  const sortedFormats = Object.fromEntries(
    Object.entries(adFormats).sort(([, a], [, b]) => a.width - b.width),
  );

  return (
    <div className="my-6">
      <h3 className="mb-3 text-lg font-semibold">Ad Formats</h3>

      <div className="flex flex-wrap gap-4">
        {Object.values(sortedFormats).map((format) => (
          <label
            key={format.id}
            className="flex flex-col items-center gap-2 border border-gray-300 shadow-sm rounded p-3 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedFormats.includes(format.id)}
                onChange={() => toggleFormat(format.id)}
              />

              <span className="font-light text-gray-700">{format.id}</span>
            </div>

            <div className="flex gap-2 text-sm">
              {format.platforms.map((platform) => (
                <FontAwesomeIcon
                  key={platform}
                  icon={platformIcons[platform]}
                  title={platform}
                />
              ))}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FormatSelector;
