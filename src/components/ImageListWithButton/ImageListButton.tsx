import { Input, InputLabel } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../../context";

const ImageListButton: React.FC = () => {
  const { data } = useGlobalContext();

  console.log(data);

  const handleInputFileChange = () => {
    const upload: any = document.getElementById("upload");
    const selectedFile = upload.files;
    console.log(selectedFile);
  };

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
        onClick={() => handleInputFileChange()}
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
