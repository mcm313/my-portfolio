import { createTheme } from "@mui/material";

const CustomTheme = createTheme({
  palette: {
    primary: {
      main: "#468779",
    },
    secondary: {
      main: "#874654",
    },
    customPalette: {
      main: "#468759",
      contrastText: "#467487",
    },
  },
});

export default CustomTheme;
