import React from "react";
import { Avatar as AvatarMui } from "@mui/material/";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { raceColors } from "../../utilities/instituteProperties";

interface Props {
  params: GridRenderCellParams;
}

const Avatar: React.FC<Props> = ({ params }) => {
  const getAvatarColor = (params: GridRenderCellParams) => {
    const specialty = params.row.specialty;

    return raceColors[specialty];
  };

  const stringAvatar = (params: GridRenderCellParams) => {
    return {
      sx: {
        bgcolor: getAvatarColor(params),
      },
      children: `${params.row.lastname[0]}${params.row.name[0]}`,
    };
  };

  return <AvatarMui {...stringAvatar(params)} />;
};

export default Avatar;
