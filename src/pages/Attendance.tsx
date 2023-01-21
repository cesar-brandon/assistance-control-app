import React from "react";
import { useDispatch } from "react-redux";
import { DataGrid, SearchBar, StudentInformation } from "../components/layouts";
import { students } from "../utilities/data";
import { columns } from "../utilities/dataGridColumns";

const Attendance: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="Attendance">
      <div className="Attendance__register">
        <DataGrid rows={students} columns={columns} />
        <SearchBar />
        <StudentInformation />
      </div>
    </div>
  );
};

export default Attendance;
