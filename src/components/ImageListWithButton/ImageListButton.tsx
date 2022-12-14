import React, { useState } from "react";
import { InputLabel, Typography } from "@mui/material";
import { useGlobalContext } from "../../context";
import styled from "@emotion/styled";
import _ from "lodash";
const StyledInput = styled.input`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
`;

/**
 * Adds image to the list with images
 */
const ImageListButton: React.FC = () => {
  const { data, setData } = useGlobalContext();
  const [error, setError] = useState<string>("");
  console.log(data);

  const handleInputFileChange = () => {
    const upload: any = document.getElementById("upload");
    const selectedFile: File = upload.files[0];
    if (!data.files.find((fl) => fl.name === selectedFile.name)) {
      setError("");
      const _files = _.cloneDeep(data.files);
      _files.push(selectedFile);
      const _data: any = _.cloneDeep(data);
      _data.files = _files;
      // sets
      _data.index = _data.files.length - 1;
      setData!(_data);
    } else setError("File with this name already exists!");
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
          cursor: "pointer",
        }}
      >
        + Upload New Image
      </InputLabel>
      <StyledInput
        type="file"
        id="upload"
        accept="image/*"
        onChange={() => handleInputFileChange()}
      />
      <Typography
        color="error"
        sx={{
          mt: 1,
          position: "absolute",
          textAlign: "center",
        }}
      >
        {error}
      </Typography>
    </>
  );
};

export default ImageListButton;
