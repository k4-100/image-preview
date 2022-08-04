import React from "react";
import ImageListWithButton from "./components/ImageListWithButton";
import PreviedImage from "./components/PreviedImage";

const App: React.FC = () => {
  return (
    <div className="App">
      App
      <ImageListWithButton />
      <PreviedImage />
    </div>
  );
};

export default App;
