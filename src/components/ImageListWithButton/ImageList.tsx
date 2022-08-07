import React from "react";
import _ from "lodash";
import { Box } from "@mui/material";

import { useGlobalContext } from "../../context";
import ImageListItem from "./ImageListItem";

const ImageList: React.FC = () => {
  const { data, setData } = useGlobalContext();

  const handleImageListItemClick = (i: number) => {
    const _data = _.cloneDeep(data);
    _data.index = i;
    setData!(_data);
  };

  return (
    <Box>
      {data.files.map((_, i) => (
        <ImageListItem
          key={i}
          handleClick={() => handleImageListItemClick(i)}
          index={i}
        />
      ))}
    </Box>
  );
};

export default ImageList;
