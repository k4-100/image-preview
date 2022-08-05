import { Button } from "@mui/material";
import React from "react";

const ImageListButton: React.FC = () => {
  return (
    <Button
      variant="contained"
      sx={{
        width: 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }}
    >
      + Upload New Image
    </Button>
  );
};

export default ImageListButton;
