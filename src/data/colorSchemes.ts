const contrastTextLight = "#fff";
const contrastTextDark = "#000";

const COLOR_SCHEMES = {
  africanSafari: {
    accent: {
      contrastText: contrastTextLight,
      main: "#0b0c09",
    },
    primary: {
      contrastText: contrastTextLight,
      main: "#c66f18",
    },
    secondary: {
      contrastText: contrastTextLight,
      main: "#6d3704",
    },
  },
  bedtimeStory: {
    accent: {
      contrastText: contrastTextDark,
      main: "#f0f0ee",
    },
    primary: {
      contrastText: contrastTextDark,
      main: "#c8d5e2",
    },
    secondary: {
      contrastText: contrastTextLight,
      main: "#e25154",
    },
  },
  countryAnimals: {
    accent: {
      contrastText: contrastTextDark,
      main: "#213b0c",
    },
    primary: {
      contrastText: contrastTextLight,
      main: "#b98f19",
    },
    secondary: {
      contrastText: contrastTextLight,
      main: "#a21d16",
    },
  },
  forestAnimals: {
    accent: {
      contrastText: contrastTextLight,
      main: "#766139",
    },
    primary: {
      contrastText: contrastTextLight,
      main: "#83933b",
    },
    secondary: {
      contrastText: contrastTextLight,
      main: "#b7821e",
    },
  },
  tomJerry: {
    accent: {
      contrastText: contrastTextDark,
      main: "#d0e8e6",
    },
    primary: {
      contrastText: contrastTextLight,
      main: "#55a8f4",
    },
    secondary: {
      contrastText: contrastTextLight,
      main: "#b68a33",
    },
  },
};

Object.freeze(COLOR_SCHEMES);

export default COLOR_SCHEMES;
