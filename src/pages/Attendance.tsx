import React, { useState } from "react";
import { AttendanceTracker, DataGrid, SearchBar } from "../components/layouts";
import { Layout, StudentCard } from "../components/common";
import useStudents from "../hooks/useStudents";
import { useDispatch } from "react-redux";
import { setStudents } from "../redux/states/student";

const Attendance: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const { students } = useStudents();
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
  dispatch(setStudents(filteredRowsStudents));
  return (
    <Layout title="Asistencia">
      <div className="Attendance">
        <div className="Attendance__register">
          <DataGrid />
          <SearchBar setSearchText={setSearchText} />
          <AttendanceTracker />
          <StudentCard />
        </div>
      </div>
    </Layout>
  );
};

export default Attendance;
