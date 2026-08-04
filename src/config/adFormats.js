const adFormats = {
  "160x600": {
    id: "160x600",
    orientation: "vertical",
    family: "skyscraper",

    width: 160,
    height: 600,

    fonts: {
      company: 28,
      category: 16,
      button: 12,
      website: 9,
    },

    elements: {
      company_y: 120,
      category_y: 240,
      button_y: 360,
      website_y: 550,

      button_width: 100,
      button_height: 35,
    },
  },

  "300x250": {
    id: "300x250",
    orientation: "rectangle",
    family: "rectangle",

    width: 300,
    height: 250,

    fonts: {
      company: 28,
      category: 16,
      button: 12,
      website: 9,
    },

    elements: {
      company_y: 40,
      category_y: 90,
      button_y: 150,
      website_y: 225,

      button_width: 110,
      button_height: 35,
    },
  },

  "728x90": {
    id: "728x90",
    orientation: "horizontal",
    family: "banner",

    width: 728,
    height: 90,

    fonts: {
      company: 24,
      category: 14,
      button: 12,
      website: 11,
    },

    elements: {
      company_y: 12,
      category_y: 42,
      button_y: 27,
      website_y: 74,

      button_width: 120,
      button_height: 35,
    },
  },
};

export default adFormats;