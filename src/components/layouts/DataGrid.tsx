import React from "react";
import { Box } from "@mui/material";
import { DataGrid as DataGridMui, GridColDef } from "@mui/x-data-grid";

interface Props {
  rows: any[];
  columns: GridColDef[];
}

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

const DataGrid: React.FC<Props> = ({ rows, columns }) => {
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
          rows={rows}
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
