import { Avatar, Skeleton } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAttendancesByStudent } from "../../../api/assistance";
import { Layout } from "../../../components/common";
import Chip from "../../../components/common/Chip";
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
  const [attendances, setAttendances] = React.useState<any[]>([]);
  const student = useSelector(
    (state: IAppStore) => state.student.selectedStudent
  );
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      hide: true,
    },
    {
      field: "status",
      headerName: "Registro",
      width: 200,
      renderCell: (params: GridRenderCellParams) => {
        return <Chip params={params} />;
      },
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 200,
    },
    {
      field: "time",
      headerName: "Hora",
      width: 200,
    },
  ];

  if (student) {
    useEffect(() => {
      getAttendancesByStudent(student.id).then((res) => {
        const rows = res.map((attendance: any) => ({
          id: attendance.id,
          status: attendance.status,
          date: new Date(attendance.updatedAt).toLocaleDateString(),
          time: new Date(attendance.updatedAt).toLocaleTimeString(),
        }));

        setAttendances(rows);
      });
    }, []);
  }

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
            {attendances.length === 0 ? (
              <Skeleton variant="rounded" width={"100%"} height={"100%"} />
            ) : (
              <DataGrid
                sx={style}
                rows={attendances}
                columns={columns}
                hideFooter
                disableSelectionOnClick
                disableColumnMenu
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;
