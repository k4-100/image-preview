import React from "react";
import ImageListWithButton from "./components/ImageListWithButton";
import PreviedImage from "./components/PreviedImage";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

/**
 * only purpose it serves is to change bgcolor
 */
const theme = createTheme({
  palette: {
    background: {
      default: "#13244d",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <ImageListWithButton />
        <PreviedImage />
      </div>
    </ThemeProvider>
  );
};

export default App;
