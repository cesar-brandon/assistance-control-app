import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { DataGrid, SearchBar } from "../components/layouts";
import useStudents from "../hooks/useStudents";
import { Layout } from "../components/common";
import { useDispatch } from "react-redux";
import { setStudent } from "../redux/states/student";

const Attendance: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const { students, loading } = useStudents();

  const dispatch = useDispatch();

  const filteredRowsStudents = students.filter(
    (row) =>
      row.id.toString().includes(searchText) ||
      row.name.includes(searchText) ||
      row.lastname.includes(searchText) ||
      row.specialty.includes(searchText) ||
      row.group.includes(searchText) ||
      row.module.includes(searchText)
  );
  dispatch(setStudent(filteredRowsStudents));

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
            <>
              <DataGrid />
            </>
          )}
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </div>
      </div>
    </Layout>
  );
};

export default Attendance;
