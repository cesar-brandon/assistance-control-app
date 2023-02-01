import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateAssistanceStatus } from "../../../api/assistance";
import { Layout, StudentCard } from "../../../components/common";
import Alert from "../../../components/common/Alert";
import {
  AttendanceTracker,
  DataGrid,
  SearchBar,
} from "../../../components/layouts";
import useScanDetection from "../../../hooks/useScanDetection";
import useStudents from "../../../hooks/useStudents";
import {
  selectStudent,
  setStudents,
  updateStatus,
} from "../../../redux/states/student";

const Attendance: React.FC = () => {
  const [alert, setAlert] = useState({ open: false, message: "", type: "" });
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
  useEffect(() => {
    dispatch(setStudents(filteredRowsStudents));
  }, [filteredRowsStudents]);

  const handleDetection = (data: any) => {
    const id = parseInt(data);
    const student = filteredRowsStudents.filter(
      (student) => student.id === id
    )[0];
    if (!student) {
      setAlert({
        ...alert,
        open: true,
        message: "Estudiante no encontrado",
        type: "error",
      });
      setTimeout(() => {
        setAlert({ ...alert, open: false });
      }, 1500);
    }
    dispatch(selectStudent(student));
    const status = "Puntual";
    dispatch(updateStatus({ id, status }));
    updateAssistanceStatus(id, status);
  };

  useScanDetection({
    onComplete(code) {
      handleDetection(code);
    },
    onError(error) {
      setAlert({
        ...alert,
        open: true,
        message: "Error en el detector",
        type: "error",
      });
      console.log(error);
    },
  });

  return (
    <Layout title="Asistencia">
      <div className="Attendance">
        <div className="Attendance__register">
          <DataGrid />
          <SearchBar setSearchText={setSearchText} />
          <AttendanceTracker />
          <StudentCard />
        </div>
        {alert.open && <Alert message={alert.message} type={alert.type} />}
      </div>
    </Layout>
  );
};

export default Attendance;
