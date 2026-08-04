import TextInput from "./TextInput";
import ColorInput from "./ColorInput";
import FontInput from "./FontInput";

function Mock({ ad, onChange }) {

  const updateField = (field, value) => {
    onChange({
      ...ad,
      [field]: value,
    });
  };

  return (
    <div className="rounded-lg border border-gray-200 p-4">

      <TextInput
        id="company"
        label="Company"
        value={ad.company}
        onChange={(e) =>
          updateField("company", e.target.value)
        }
      />


      <TextInput
        id="category"
        label="Category"
        value={ad.category}
        onChange={(e) =>
          updateField("category", e.target.value)
        }
      />


      <ColorInput
        id="bg_color"
        label="Background Color"
        value={ad.bg_color}
        onChange={(e) =>
          updateField("bg_color", e.target.value)
        }
      />


      <ColorInput
        id="text_color"
        label="Text Color"
        value={ad.text_color}
        onChange={(e) =>
          updateField("text_color", e.target.value)
        }
      />


      <ColorInput
        id="button_color"
        label="Button Color"
        value={ad.button_color}
        onChange={(e) =>
          updateField("button_color", e.target.value)
        }
      />


      <ColorInput
        id="button_text_color"
        label="Button Text Color"
        value={ad.button_text_color}
        onChange={(e) =>
          updateField("button_text_color", e.target.value)
        }
      />


      <TextInput
        id="button_text"
        label="Button Text"
        value={ad.button_text}
        onChange={(e) =>
          updateField("button_text", e.target.value)
        }
      />

    </div>
  );
}

export default Mock;