import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAssistanceStatus } from "../../../api/assistance";
import { Layout, StudentCard } from "../../../components/common";
import {
  AttendanceTracker,
  DataGrid,
  SearchBar,
} from "../../../components/layouts";
import useStudents from "../../../hooks/useStudents";
import {
  selectStudent,
  setStudents,
  updateStatus,
} from "../../../redux/states/student";

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

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    const id = parseInt(event.clipboardData.getData("text/plain"));
    const student = filteredRowsStudents.filter(
      (row) => row.id === parseInt(event.clipboardData.getData("text/plain"))
    )[0];
    dispatch(selectStudent(student));
    const status = "Puntual";
    updateAssistanceStatus(id, status);
    dispatch(updateStatus({ id, status }));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode === 8) {
      setSearchText("");
    }
  };

  return (
    <Layout title="Asistencia">
      <div
        className="Attendance"
        tabIndex={0}
        onPaste={handlePaste}
        onKeyDown={handleKeyDown}
      >
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
