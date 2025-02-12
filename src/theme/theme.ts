/** LIBRARIES */
import { createTheme } from "@mui/material/styles";

/** DATA */
import COLOR_SCHEMES from "@src/data/colorSchemes";

const colors = COLOR_SCHEMES["bedtimeStory"];

export const theme = createTheme({
  breakpoints: {
    values: {
      xxxs: 320,
      xxs: 375,
      xs: 480,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
        },
      },
    },
  },
  palette: {
    accent: {
      contrastText: colors.accent.contrastText,
      main: colors.accent.main,
    },
    primary: {
      contrastText: colors.primary.contrastText,
      main: colors.primary.main,
    },
    secondary: {
      contrastText: colors.secondary.contrastText,
      main: colors.secondary.main,
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});
