import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormLogin from "../components/layouts/FormLogin";
import { addEmployee } from "../redux/states/employee";
import { PrivateRoutes } from "../router/routes";
import { employees } from "../utilities/data";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    const result = employees.find((employee) => employee.id === 1);
    dispatch(addEmployee(result));
    navigate(`/${PrivateRoutes.ATTENDANCE}`, { replace: true });
  };

  return (
    <div className="Login">
      <div className="Login__card">
        <div className="Login__content_form">
          <FormLogin event={login} />
        </div>
        <div className="Login__content_image">
          <img
            src="http://www.gllg.edu.pe/img/ifv/1.jpg"
            alt="instituto-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
