import { Box } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../../context";
import ImageListItem from "./ImageListItem";

const ImageList: React.FC = () => {
  const { data } = useGlobalContext();
  return (
    <Box>
      {data.files.map((_, i) => (
        <ImageListItem key={i} />
      ))}
    </Box>
  );
};

export default ImageList;
