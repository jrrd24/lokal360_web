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
      eighty: "#444444CC",
      sixty: "#44444499",
      forty: "#44444466",
    },
    background: {
      paper: "#ffffff",
      default: "#fafafa",
    },
    divider: "#9D9D9D",
    buttonHover: "#757575",
    success: { main: "#8CCC00" },
    warning: { main: "#F7B801" },
    danger: { main: "#F35B04" },
  },

  typography: {
    sectionTitle: {
      fontSize: "24px",
      fontWeight: 600,
      color: "#444",
      letterSpacing: -0.3,
    },
    sectionTitleSmall: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#444",
      lineHeight: "20px",
      letterSpacing: -0.3,
      textTransform: "none",
    },
    seeAll: {
      fontSize: "16px",
      color: "#44444499",
      textTransform: "none",
    },
    bigBadge: {
      fontSize: 30,
    },
    status: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#444",
      lineHeight: "16px",
      letterSpacing: -0.3,
      textTransform: "none",
    },
  },
});

export default theme;
