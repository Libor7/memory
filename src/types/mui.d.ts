/** LIBRARIES */
import "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxxs: true;
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }

  interface Palette {
    accent?: {
      main: string;
      contrastText: string;
    };
  }

  interface PaletteOptions {
    accent?: {
      main: string;
      contrastText: string;
    };
  }
}
