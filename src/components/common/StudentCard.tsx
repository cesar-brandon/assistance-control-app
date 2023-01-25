import React from "react";
import Logo from "../../assets/logo-IFV.svg";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { raceColors } from "../layouts/DataGrid";

const StudentCard: React.FC = () => {
  const student = useSelector((state: any) => state.student.selectedStudent);

  const specialties: { [key: string]: string } = {
    DS: "Desarrollo de Sistemas de Información",
    ET: "Enfermeria Tecnica",
    FT: "Farma Tecnica",
    AE: "Administración y Gestión Empresarial",
    CF: "Contabilidad y Finanzas",
  };

  return (
    <div className="StudentCard">
      {!student ? (
        <div
          className="StudentCard__specialty"
          style={{ backgroundColor: "#d2d2d2" }}
        ></div>
      ) : (
        <div
          className="StudentCard__specialty"
          style={{ backgroundColor: `${raceColors[student.specialty]}` }}
        >
          <p>{specialties[student.specialty]}</p>
        </div>
      )}
      <div className="StudentCard__content">
        <span></span>
        <div className="StudentCard__header">
          <img src={Logo} alt="logo" />
          <p>CARNÉ DEL ESTUDIANTE</p>
        </div>
        {!student ? (
          <div></div>
        ) : (
          <div className="StudentCard__student">
            <div className="StudentCard__student__avatar">
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
            <div className="StudentCard__student__name">
              <strong>{student.lastname}</strong>
              <p>{student.name}</p>
            </div>
          </div>
        )}
        <div className="StudentCard__information"></div>
      </div>
    </div>
  );
};

export default StudentCard;
