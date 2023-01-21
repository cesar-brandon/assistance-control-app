import React from "react";
import { useNavigate } from "react-router-dom";
import InsitutoLogo from "../../assets/instituto-ifv.png";
import Logout from "./Logout";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="Header">
      <div onClick={redirectToHome}>
        <img src={InsitutoLogo} alt="logo" />
      </div>
      <Logout />
    </div>
  );
};

export default Header;
