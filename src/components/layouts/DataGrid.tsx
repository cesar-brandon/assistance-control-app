import React from "react";
import { Box } from "@mui/material";
import {
  GridRenderCellParams,
  DataGrid as DataGridMui,
  GridColDef,
  GridRowParams,
} from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "../common";
import { selectStudent, updateStatus } from "../../redux/states/student";
import { updateAssistanceStatus } from "../../api/assistance";
import { Skeleton } from "@mui/material";
import Chip from "../common/Chip";

const style = {
  bgcolor: "#fafafa",
  boxShadow: "13px 19px 71px -35px #18181b",
  borderRadius: "10px",
  "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus":
    {
      outline: "none !important",
    },
};

const DataGrid: React.FC = () => {
  const dispatch = useDispatch();

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
      minWidth: 10,
    },
    {
      field: "group",
      headerName: "GRUPO",
      minWidth: 10,
    },
    {
      field: "module",
      headerName: "MODULO",
      minWidth: 10,
    },
    {
      field: "status",
      headerName: "REGISTRO",
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => {
        return <Chip params={params} action={handleChipClick} />;
      },
      pinnable: true,
    },
  ];

  const rowsStudents = useSelector((state: any) => state.student.students);

  const selectStudentFromRow = (params: GridRowParams) => {
    dispatch(selectStudent(params.row));
  };

  return (
    <div className="DataGrid__content">
      {!rowsStudents || rowsStudents.length === 0 ? (
        <Skeleton variant="rounded" width={"100%"} height={"74.8%"} />
      ) : (
        <Box
          sx={{
            height: "74.8%",
            width: "100%",
          }}
        >
          <DataGridMui
            onRowClick={(params: GridRowParams) => selectStudentFromRow(params)}
            sx={style}
            rows={rowsStudents}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick
            disableColumnMenu
          />
        </Box>
      )}
    </div>
  );
};

export default DataGrid;
