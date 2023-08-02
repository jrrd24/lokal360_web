import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6E5FDE",
      light: "#8b7ce4",
      dark: "#4d44d7",
    },
    secondary: {
      main: "#ffbb03",
      light: "#ffd14d",
      dark: "#ffae00",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#444444",
      contrastText: "#FFFFFF",
    },
    background: {
      paper: "#ffffff",
      default: "#fafafa",
    },
    divider: "#9D9D9D",
    buttonHover: "#757575",
  },

  typography: {
    sectionTitle: {
      fontSize: "24px",
      fontWeight: 600,
      color: "#444",
    },
    sectionTitleSmall: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#444",
      lineHeight: "20px",
    },
  },
});

export default theme;
