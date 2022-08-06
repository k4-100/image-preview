import { Box } from "@mui/material";
import React from "react";
import ImageListButtonItem from "./ImageListItem";
// import StyledImageListItem from "./StyledImageListItem";

const ImageList: React.FC = () => {
  return (
    <Box>
      <ImageListButtonItem />
      {/* <StyledImageListItem /> */}
      <ImageListButtonItem />
      <ImageListButtonItem />
      <ImageListButtonItem />
      <ImageListButtonItem />
    </Box>
  );
};

export default ImageList;
