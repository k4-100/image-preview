import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledImg = styled.img`
  display: block;
  margin-right: 50px;
`;

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
      <StyledImg src="logo192.png" alt="displayed" />
    </Box>
  );
};

export default PreviedImage;
