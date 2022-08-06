import React from "react";
import ImageListWithButton from "./components/ImageListWithButton";
import PreviedImage from "./components/PreviedImage";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "purple",
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
