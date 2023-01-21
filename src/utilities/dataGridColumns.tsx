import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { red, green } from "@mui/material/colors";

function getChipProps(params: GridRenderCellParams) {
  if (params.value === "puntual") {
    return {
      icon: <DoneIcon color="success" />,
      label: params.value,
      sx: {
        borderColor: green[500],
        color: green[500],
      },
    };
  }
  if (params.value === "pendiente") {
    return {
      icon: <WarningAmberIcon color="warning" />,
      label: params.value,
      sx: {
        borderColor: red[500],
        color: red[500],
      },
    };
  }
}

export const columns: GridColDef[] = [
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
    field: "register",
    headerName: "REGISTRO",
    minWidth: 150,
    renderCell: (params: GridRenderCellParams) => {
      return <Chip variant="outlined" size="small" {...getChipProps(params)} />;
    },
  },
];
