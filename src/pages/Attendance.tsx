import React, { useState } from "react";
import { AttendanceTracker, DataGrid, SearchBar } from "../components/layouts";
import { Layout, StudentCard } from "../components/common";
import useStudents from "../hooks/useStudents";
import { useDispatch, useSelector } from "react-redux";
import { setStudents, updateStatus } from "../redux/states/student";
import { updateAssistanceStatus } from "../api/assistance";

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
    if (!event.clipboardData) return console.log("No data");
    setSearchText(event.clipboardData.getData("text/plain"));
    let status = filteredRowsStudents
      .filter(
        (row) => row.id === parseInt(event.clipboardData.getData("text/plain"))
      )
      .map((row) => row.status);

    status[0] === "Puntual" ? (status[0] = "Ausente") : (status[0] = "Puntual");
    console.log(searchText);

    const id = parseInt(searchText);
    console.log(id, status[0]);
    const props = {
      id: id,
      status: status[0],
    };
    updateAssistanceStatus(id, status[0]);
    dispatch(updateStatus(props));
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
