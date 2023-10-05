import { Container } from "@mui/material";
import "./App.css";
import theme from "./Theme";
import { ThemeProvider } from "@emotion/react";
import { DateRangeProvider } from "./contexts/DateRangeContext";
import Router from "./Router";
import "./css/scrollbar.css";

function App() {
  return (
    <DateRangeProvider>
      <ThemeProvider theme={theme}>
        <Container disableGutters maxWidth="100%">
          <div className="App custom-scrollbar">
            <Router />
          </div>
        </Container>
      </ThemeProvider>
    </DateRangeProvider>
  );
}

export default App;
