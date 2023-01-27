import { Avatar } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "../../../components/common";
import { raceColors } from "../../../components/layouts/DataGrid";
import { IAppStore } from "../../../redux/store";

const style = {
  bgcolor: "#fff",
  boxShadow: "13px 19px 71px -35px rgba(0, 0, 0, 0.75)",
  borderRadius: "10px",
  "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus":
    {
      outline: "none !important",
    },
};

const Registration: React.FC = () => {
  const student = useSelector(
    (state: IAppStore) => state.student.selectedStudent
  );
  const columns: GridColDef[] = [
    {
      field: "status",
      headerName: "Estado de asistencia",
      width: 200,
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 200,
    },
  ];
  return (
    <Layout title="Registros">
      <div className="Registration">
        <div className="Registration__content">
          <div className="Registration__student">
            {student && (
              <>
                <div>
                  <Avatar
                    sx={{
                      bgcolor: raceColors[student.specialty],
                      width: 150,
                      height: 150,
                      fontSize: "3rem",
                    }}
                  >
                    {`${student.lastname[0]}${student.name[0]}`}
                  </Avatar>
                </div>
                <div className="Registration__student__info">
                  <strong>{student.lastname} </strong>
                  <p>{student.name}</p>
                </div>
              </>
            )}
          </div>
          <div className="Registration__assistance">
            <DataGrid sx={style} rows={[]} columns={columns} hideFooter />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
