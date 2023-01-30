import React from "react";
import { Layout } from "../../../components/common";

const Maintenance: React.FC = () => {
  return (
    <Layout title="Mantenimiento">
      <div className="Maintenance">
        <div className="Maintenance__content">
          <div className="Maintenance__content__student">
            Estudiantes
            <span></span>
          </div>
          <div>Profesores</div>
          <div>Turnos</div>
        </div>
      </div>
    </Layout>
  );
};

export default Maintenance;
