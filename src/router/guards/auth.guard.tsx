import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../../router/routes";
import { AppStore } from "../../redux/store";

export default function AuthGuard() {
  const employeeState = useSelector((store: AppStore) => store.employee);
  return employeeState.password ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
}
