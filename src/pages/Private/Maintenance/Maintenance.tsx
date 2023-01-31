import React from "react";
import { Layout } from "../../../components/common";
import MaintenanceCard from "../../../components/common/MaintenanceCard";

const Maintenance: React.FC = () => {
  return (
    <Layout title="Mantenimiento">
      <div className="Maintenance">
        <div className="Maintenance__content">
          <MaintenanceCard label="Profesores" />
          <MaintenanceCard label="Alumnos" />
          <MaintenanceCard label="Turnos" />
        </div>
      </div>
    </Layout>
  );
};

export default Maintenance;
