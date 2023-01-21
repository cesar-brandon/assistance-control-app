import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetEmployee } from "../../redux/states/employee";
import { PublicRoutes } from "../../router/routes";

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentPath = window.location.pathname.slice(1);

  const logOut = () => {
    dispatch(resetEmployee());
    navigate(PublicRoutes.LOGIN, { replace: true });
  };

  return (
    <div className="Logout">
      {currentPath !== PublicRoutes.LOGIN && (
        <div className="Logout__button" onClick={logOut}>
          <p>Salir</p>
          <svg
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
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Logout;
