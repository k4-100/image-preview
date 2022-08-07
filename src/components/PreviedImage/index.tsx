import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useGlobalContext } from "../../context";

const StyledImg = styled.img`
  display: block;
  margin-right: 25px;
  width: 350px;
  max-height: 350px;
`;
/**
 * @returns image/info about no image displayed to the right
 */
const PreviedImage: React.FC = () => {
  const [src, setSrc] = useState<string>("");
  const { files, index } = useGlobalContext().data;

  useEffect(() => {
    if (files.length > 0) {
      const fileReader = new FileReader();

      fileReader.addEventListener("loadend", () => {
        setSrc(fileReader.result as string);
      });

      fileReader.readAsDataURL(files[index]);
    }
  }, [files, index]);

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
      {src ? (
        <StyledImg src={src} alt="" />
      ) : (
        <Typography
          variant="h5"
          color="primary.light"
          sx={{
            marginRight: "25px",
          }}
        >
          Add image to start
        </Typography>
      )}
    </Box>
  );
};

export default PreviedImage;
