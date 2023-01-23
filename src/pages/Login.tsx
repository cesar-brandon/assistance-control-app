import React from "react";
import { Layout } from "../components/common";
import FormLogin from "../components/layouts/FormLogin";

const Login: React.FC = () => {
  return (
    <Layout title="Login">
      <div className="Login">
        <div className="Login__card">
          <div className="Login__content_form">
            <FormLogin />
          </div>
          <div className="Login__content_image">
            <img
              src="http://www.gllg.edu.pe/img/ifv/1.jpg"
              alt="instituto-image"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
