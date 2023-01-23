import React from "react";
import { Box } from "@mui/material";
import {
  GridRenderCellParams,
  DataGrid as DataGridMui,
  GridColDef,
} from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { IAppStore } from "../../redux/store";
import {} from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { red, green } from "@mui/material/colors";
import { Avatar } from "../common";
import { updateStatus } from "../../redux/states/student";
import { updateAssistanceStatus } from "../../api/assistance";

const style = {
  border: 1,
  borderColor: "#999",
  borderRadius: "10px",
  "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus":
    {
      outline: "none !important",
    },
};
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

const DataGrid: React.FC = () => {
  const dispatch = useDispatch();
  const rowsStudents = useSelector((state: IAppStore) => state.student);
  const handleChipClick = (params: GridRenderCellParams) => {
    let status = params.value === "Puntual" ? "Ausente" : "Puntual";
    updateAssistanceStatus(params.row.id, status);

    const props = {
      id: params.row.id,
      status: status,
    };

    dispatch(updateStatus(props));
  };
  const columns: GridColDef[] = [
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
      field: "status",
      headerName: "REGISTRO",
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <Chip
            variant="outlined"
            size="small"
            {...getChipProps(params)}
            onClick={() => handleChipClick(params)}
          />
        );
      },
    },
  ];
  return (
    <div className="DataGrid__content">
      <Box
        sx={{
          height: "77.6%",
          width: "100%",
        }}
      >
        <DataGridMui
          sx={style}
          rows={rowsStudents}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          disableColumnMenu
        />
      </Box>
    </div>
  );
};

export default DataGrid;
