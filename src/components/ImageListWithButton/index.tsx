import { Paper, Box } from "@mui/material";
import React from "react";
import Button from "./Button";
import ImageList from "./ImageList";

const ImageListWithButton: React.FC = () => {
  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          width: "200px",
          ml: 2,
        }}
      >
        <ImageList />
        <Button />
      </Paper>
    </Box>
  );
};

export default ImageListWithButton;
