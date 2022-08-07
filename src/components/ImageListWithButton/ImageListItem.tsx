import { Button } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../../context";

type Props = {
  handleClick: Function;
  index: number;
};

const ImageListItem: React.FC<Props> = ({ handleClick, index }) => {
  const { data } = useGlobalContext();
  const file = data.files.find((fl, i) => i === index);
  return (
    <Button
      sx={{
        display: "block",
        width: "100%",
        textAlign: "left",
        textTransform: "initial",
      }}
      onClick={() => handleClick(index)}
    >
      {" "}
      ./{file?.name}
    </Button>
  );
};

export default ImageListItem;
