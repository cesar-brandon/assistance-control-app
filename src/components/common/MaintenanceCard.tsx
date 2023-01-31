import React from "react";

interface Props {
  label: string;
}

const MaintenanceCard: React.FC<Props> = ({ label }) => {
  return (
    <div className="MaintenanceCard">
      <div className="MaintenanceCard__avatar"></div>
      <p className="MaintenanceCard__text">{label}</p>
      <p className="MaintenanceCard__statistics">18</p>
    </div>
  );
};

export default MaintenanceCard;
