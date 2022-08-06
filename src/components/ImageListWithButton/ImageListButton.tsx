import { InputLabel } from "@mui/material";
import React from "react";
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

const ImageListButton: React.FC = () => {
  const { data, setData } = useGlobalContext();

  console.log(data);

  const handleInputFileChange = () => {
    const upload: any = document.getElementById("upload");
    const selectedFile: File = upload.files[0];
    const _files = _.cloneDeep(data.files);
    _files.push(selectedFile);
    const _data: any = _.cloneDeep(data);
    _data.files = _files;
    setData!(_data);
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
        multiple
        onChange={() => handleInputFileChange()}
      />
    </>
  );
};

export default ImageListButton;
