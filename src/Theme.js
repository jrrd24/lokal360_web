import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#6E5FDE',
        light: '#8b7ce4',
        dark: '#4d44d7',
      },
      secondary: {
        main: '#ffbb03',
        light: '#ffd14d',
        dark: '#ffae00',
        contrastText: '#ffffff',
      },
      text: {
        primary: '#444444',
      },
      background: {
        paper: '#ffffff',
        default: '#fafafa',
      },
      divider: '#9D9D9D',
    },
    overrides: {
      MuiAppBar: {
        colorInherit: {
          backgroundColor: '#689f38',
          color: '#fff',
        },
      },
    },
    props: {
      MuiAppBar: {
        color: '#FFF',
      },
    },
  });

  export default theme