import React from "react";
import _ from "lodash";
import { Box } from "@mui/material";

import { useGlobalContext } from "../../context";
import ImageListItem from "./ImageListItem";

/**
 * @returns List of images to choose from (if list isn't empty)
 */
const ImageList: React.FC = () => {
  const { data, setData } = useGlobalContext();

  /**
   * changes currently displayed image
   * @param i index
   */
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
