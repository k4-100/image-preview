import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useGlobalContext } from "../../context";

const StyledImg = styled.img`
  display: block;
  margin-right: 50px;
`;

const PreviedImage: React.FC = () => {
  const [src, setSrc] = useState<string>("");
  const { data } = useGlobalContext();

  useEffect(() => {
    if (data.files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setSrc(fileReader.result as string);
      };
      fileReader.readAsDataURL(data.files[0]);
    }
  }, [data]);

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
      <StyledImg src={src} alt="" />
    </Box>
  );
};

export default PreviedImage;
