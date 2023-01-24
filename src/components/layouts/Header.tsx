import { Avatar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import InsitutoLogo from "../../assets/instituto-ifv.png";
import { PublicRoutes } from "../../router/routes";
import Clock from "./Clock";
import Logout from "./Logout";
import SubMenu from "./SubMenu";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/", { replace: true });
  };

  const currentPath = window.location.pathname.slice(1);

  return (
    <div className="Header">
      <div className="Header__dashboard">
        <div className="Header__dashboard__home" onClick={redirectToHome}>
          <img src={InsitutoLogo} alt="logo" />
          {currentPath !== PublicRoutes.LOGIN && (
            <>
              <p className="slash">/</p>
              <div className="home__user-section">
                <Avatar sx={{ bgcolor: "#000", width: 35, height: 35 }} />
                <p>Julio Mendoza</p>
                <div className="chip">Registador</div>
              </div>
            </>
          )}
        </div>
        <Clock />
        <Logout />
      </div>
      <div className="Header__submenu">
        {currentPath !== PublicRoutes.LOGIN && <SubMenu />}
      </div>
    </div>
  );
};

export default Header;
