import { Button } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../../context";

type Props = {
  handleClick: Function;
  index: number;
};

const ImageListItem: React.FC<Props> = ({ handleClick, index }) => {
  const { data } = useGlobalContext();
  const { name } = data.files.find((_, i) => i === index) as File;
  let displayedFileName = "";
  if (name.length > 20)
    displayedFileName = name
      .split(".")
      .reduce((prev, next) => prev.substring(0, 13) + "(...)." + next);
  else displayedFileName = name;

  return (
    <Button
      sx={{
        display: "block",
        width: "100%",
        textAlign: "left",
        textTransform: "initial",
        borderBottom: "2px solid hsla(0,0%,0%,0.1)",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
        color: "text.primary",
        fontWeight: "bold",
      }}
      onClick={() => handleClick(index)}
    >
      {" "}
      ./{displayedFileName}
    </Button>
  );
};

export default ImageListItem;
