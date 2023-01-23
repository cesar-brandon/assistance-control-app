import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { red, green } from "@mui/material/colors";
import { Avatar } from "../components/common";

function getChipProps(params: GridRenderCellParams) {
  if (params.value === "Puntual") {
    return {
      icon: <DoneIcon color="success" />,
      label: params.value,
      sx: {
        width: "90%",
        borderColor: green[500],
        color: green[500],
      },
    };
  }
  if (params.value === "Ausente") {
    return {
      icon: <WarningAmberIcon color="warning" />,
      label: params.value,
      sx: {
        width: "90%",
        borderColor: red[500],
        color: red[500],
      },
    };
  }
}

export const raceColors: { [key: string]: string } = {
  DS: "#FFC107",
  ET: "#20c997",
  FT: "#4488cc",
  AE: "#c197db",
  CF: "#DC3545",
};

export const columns: GridColDef[] = [
  {
    field: "avatar",
    headerName: "AVATAR",
    width: 80,
    renderCell: (params: GridRenderCellParams) => <Avatar params={params} />,
  },
  {
    field: "id",
    headerName: "CODIGO",
    minWidth: 100,
    editable: false,
  },
  {
    field: "lastname",
    headerName: "APELLIDO",
    minWidth: 150,
  },
  {
    field: "name",
    headerName: "NOMBRE",
    minWidth: 150,
  },
  {
    field: "specialty",
    headerName: "ESPECIALIDAD",
    minWidth: 150,
  },
  {
    field: "group",
    headerName: "GRUPO",
    minWidth: 120,
  },
  {
    field: "module",
    headerName: "MODULO",
    minWidth: 100,
  },
  {
    field: "assistance",
    headerName: "REGISTRO",
    minWidth: 150,
    renderCell: (params: GridRenderCellParams) => {
      return <Chip variant="outlined" size="small" {...getChipProps(params)} />;
    },
  },
];
