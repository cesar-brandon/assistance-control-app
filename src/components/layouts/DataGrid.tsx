import React from "react";
import { Box } from "@mui/material";
import { DataGrid as DataGridMui, GridColDef } from "@mui/x-data-grid";

interface Props {
  rows: any[];
  columns: GridColDef[];
}

const DataGrid: React.FC<Props> = ({ rows, columns }) => {
  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
      }}
    >
      <DataGridMui
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default DataGrid;
