import { Input, InputLabel } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../../context";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
`;

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
      >
        + Upload New Image
      </InputLabel>
      <StyledInput
        type="file"
        id="upload"
        onChange={() => handleInputFileChange()}
      />
    </>
  );
};

export default ImageListButton;
