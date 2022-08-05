import { Box } from "@mui/material";
import React from "react";
import ImageListButtonItem from "./ImageListItem";

const ImageList: React.FC = () => {
  return (
    <Box>
      <ImageListButtonItem />
      <ImageListButtonItem />
      <ImageListButtonItem />
      <ImageListButtonItem />
      <ImageListButtonItem />
    </Box>
  );
};

export default ImageList;
