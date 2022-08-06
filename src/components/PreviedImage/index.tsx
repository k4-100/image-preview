import React from "react";
import { Box } from "@mui/material";
const PreviedImage: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        marginLeft: "auto",
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img
        src="logo192.png"
        alt="displayed"
        style={{
          display: "block",
          marginRight: "50px",
        }}
      />
    </Box>
  );
};

export default PreviedImage;
