import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../../router/routes";
import { getLocalStorage } from "../../utilities/localStorage.utility";
import { LocalStorageTypes } from "../../models/localstorage";

export default function AuthGuard() {
  const token = getLocalStorage(LocalStorageTypes.TOKEN);

  return token ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
}
