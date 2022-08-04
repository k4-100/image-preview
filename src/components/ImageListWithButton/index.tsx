import React from "react";
import Button from "./Button";
import ImageList from "./ImageList";

const ImageListWithButton: React.FC = () => {
  return (
    <h1>
      ImageListWithButton
      <ImageList />
      <Button />
    </h1>
  );
};

export default ImageListWithButton;
