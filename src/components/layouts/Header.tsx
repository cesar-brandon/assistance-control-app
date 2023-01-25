import { Avatar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import InsitutoLogo from "../../assets/instituto-ifv.png";
import { PublicRoutes } from "../../router/routes";
import AccountMenu from "./AccountMenu";
import Clock from "./Clock";
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
        <div className="Header__dashboard__home">
          <img src={InsitutoLogo} alt="logo" onClick={redirectToHome} />
          {currentPath !== PublicRoutes.LOGIN && (
            <>
              <p className="slash">/</p>
              <div className="home__user-section">
                <Avatar sx={{ bgcolor: "#4488cc", width: 32, height: 32 }}>
                  J
                </Avatar>
                <p>Julio Mendoza</p>
                <div className="chip">Registador</div>
                <svg
                  style={{ width: 25, color: "#fff" }}
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
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </div>
            </>
          )}
        </div>
        <Clock />
        <AccountMenu />
      </div>
      <div className="Header__submenu">
        {currentPath !== PublicRoutes.LOGIN && <SubMenu />}
      </div>
    </div>
  );
};

export default Header;
