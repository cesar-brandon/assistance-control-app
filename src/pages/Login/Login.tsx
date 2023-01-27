import React from "react";
import { Layout } from "../../components/common";
import FormLogin from "../../components/layouts/FormLogin";
import ImageLoginIfv from "../../assets/image-login-ifv.jpg";

const Login: React.FC = () => {
  return (
    <Layout title="Login">
      <div className="Login">
        <div className="Login__card">
          <div className="Login__content_form">
            <FormLogin />
          </div>
          <div className="Login__content_image">
            <img src={ImageLoginIfv} alt="instituto-image" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
