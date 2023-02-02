import React from "react";
import Logo from "../../assets/logo-IFV.svg";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import BarcodeExample from "../../assets/barcode-example.png";
import { IAppStore } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { raceColors, specialties } from "../../utilities/instituteProperties";

const StudentCard: React.FC = () => {
  const navigate = useNavigate();
  const student = useSelector(
    (state: IAppStore) => state.student.selectedStudent
  );

  const handleClick = () => {
    if (!student) return;
    navigate("/privado/registro");
  };

  return (
    <div className="StudentCard" onClick={handleClick}>
      {!student ? (
        <div className="StudentCard__specialty"></div>
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
                  width: "100%",
                  height: "100%",
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
            <div className="StudentCard__student__info">
              <img src={BarcodeExample} alt="barcode-example" />
              <p>Código del alumno(a): {student.id}</p>
            </div>
          </div>
        )}
      </div>
      <div className="StudentCard__glass">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
          />
        </svg>
      </div>
    </div>
  );
};

export default StudentCard;
