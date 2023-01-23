import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { DataGrid, SearchBar } from "../components/layouts";
import useStudents from "../hooks/useStudents";
import { IStudentAssistance } from "../models/student";
import { columns } from "../utilities/dataGridColumns";
import { Layout } from "../components/common";

const Attendance: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const { students, loading } = useStudents();

  const rowsStudents = students.map((student: IStudentAssistance) => ({
    id: student.id,
    lastname: student.lastname,
    name: student.name,
    specialty: student.specialty,
    group: student.group,
    module: student.module,
    assistance: student.assistances
      .map((assistance) => assistance.status)
      .join(", "),
  }));

  const filteredRowsStudents = rowsStudents.filter(
    (row) =>
      row.id.toString().includes(searchText) ||
      row.name.includes(searchText) ||
      row.lastname.includes(searchText) ||
      row.specialty.includes(searchText) ||
      row.group.includes(searchText) ||
      row.module.includes(searchText) ||
      row.assistance.includes(searchText)
  );

  return (
    <Layout title="Asistencia">
      <div className="Attendance">
        <div className="Attendance__register">
          {loading ? (
            <Skeleton
              className="DataGrid__content"
              variant="rounded"
              width={"100%"}
              height={"77.6%"}
            />
          ) : (
            <DataGrid rows={filteredRowsStudents} columns={columns} />
          )}
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </div>
      </div>
    </Layout>
  );
};

export default Attendance;
