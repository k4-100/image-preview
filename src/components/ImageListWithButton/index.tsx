import { Paper, Box } from "@mui/material";
import React from "react";
import ImageListButton from "./ImageListButton";
import ImageList from "./ImageList";

const ImageListWithButton: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: "100",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "200px",
          ml: 2,
        }}
      >
        <ImageList />
        <ImageListButton />
      </Paper>
    </Box>
  );
};

export default ImageListWithButton;
