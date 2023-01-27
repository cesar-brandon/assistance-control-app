import React, { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "../router/routes";
import RoutesWithNotFound from "../utilities/RoutesWithNotFound";

const Attendance = lazy(() => import("./Private/Attendance/Attendance"));
const Registration = lazy(() => import("./Private/Registration/Registration"));
const Maintenance = lazy(() => import("./Private/Maintenance/Maintenance"));

const Private: React.FC = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
      <Route path={PrivateRoutes.ATTENDANCE} element={<Attendance />} />
      <Route path={PrivateRoutes.REGISTRATION} element={<Registration />} />
      <Route path={PrivateRoutes.MAINTEINANCE} element={<Maintenance />} />
    </RoutesWithNotFound>
  );
};

export default Private;
