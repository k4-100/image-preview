import { Button } from "@mui/material";
import React from "react";

type Props = {
  handleClick: Function;
  index: number;
};

const ImageListItem: React.FC<Props> = ({ handleClick, index }) => {
  return (
    <Button
      sx={{
        display: "block",
      }}
    >
      {index + 1}
    </Button>
  );
};

export default ImageListItem;
