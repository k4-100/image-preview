import { Input, InputLabel } from "@mui/material";
import React from "react";

const ImageListButton: React.FC = () => {
  return (
    <>
      <InputLabel
        htmlFor="upload"
        sx={{
          p: 1,
          color: "white",
          backgroundColor: "primary.main",
          borderRadius: "0 0 4px 4px",
        }}
      >
        + Upload New Image
      </InputLabel>
      <Input
        id="upload"
        type="file"
        sx={{
          zIndex: "-1",
          position: "absolute",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
        }}
      />
    </>
  );
};

export default ImageListButton;
