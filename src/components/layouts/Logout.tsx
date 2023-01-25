import React from "react";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../router/routes";
import { ListItemIcon } from "@mui/material";
import { Logout } from "@mui/icons-material";

const LogoutComponent: React.FC = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate(PublicRoutes.LOGIN, { replace: true });
  };

  return (
    <div className="Logout" onClick={logOut}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Salir
    </div>
  );
};

export default LogoutComponent;
