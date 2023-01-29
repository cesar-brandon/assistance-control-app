import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Chip as ChipMui } from "@mui/material";

function getChipProps(params: GridRenderCellParams) {
  if (params.value === "Puntual") {
    return {
      icon: <DoneIcon color="success" />,
      label: params.value,
      sx: {
        width: "90%",
        borderColor: "#e8f5e9",
        color: "#4caf50",
        bgcolor: "#e8f5e9",
        "&:hover": {
          borderColor: "#4caf50",
        },
      },
    };
  }
  if (params.value === "Ausente") {
    return {
      icon: <WarningAmberIcon color="warning" />,
      label: params.value,
      sx: {
        width: "90%",
        borderColor: "#ffebee",
        color: "#f44336",
        bgcolor: "#ffebee",
        "&:hover": {
          borderColor: "#f44336",
        },
      },
    };
  }
}

interface Props {
  params: GridRenderCellParams;
  action?: (params: GridRenderCellParams) => void;
}

const Chip: React.FC<Props> = ({ params, action }) => {
  return action ? (
    <ChipMui
      variant="outlined"
      size="small"
      {...getChipProps(params)}
      onClick={() => action && action(params)}
    />
  ) : (
    <ChipMui size="small" {...getChipProps(params)} />
  );
};
export default Chip;
