import React from "react";
import { DataGrid, SearchBar, StudentInformation } from "../components/layouts";
import { students } from "../utilities/data";
import { columns } from "../utilities/dataGridColumns";

const Attendance: React.FC = () => {
  return (
    <div className="Attendance">
      <div className="Attendance__register">
        <DataGrid rows={students} columns={columns} />
        <SearchBar />
      </div>
    </div>
  );
};

export default Attendance;
