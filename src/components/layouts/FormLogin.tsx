import { Formik, FormikErrors } from "formik";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/login";
import { PrivateRoutes } from "../../router/routes";
import { Form } from "../common";

export interface IFormLogin {
  email: string;
  password: string;
}

const validate = (values: IFormLogin) => {
  let error: FormikErrors<IFormLogin> = {};
  if (!values.email) error.email = "Ingrese su correo";

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    error.email = "Ingresa un correo válido";

  if (!values.password) error.password = "Ingresa tu contraseña";

  return error;
};

const FormLogin: React.FC = () => {
  const initialValues: IFormLogin = { email: "", password: "" };
  const navigate = useNavigate();

  const onSubmit = async (values: IFormLogin) => {
    const response = await login(values);

    if (response) {
      navigate(`/${PrivateRoutes.ATTENDANCE}`, { replace: true });
    }
  };

  return (
    <>
      <div className="header">
        <h4 className="tittle">Hola de nuevo!</h4>
        <p className="description">
          ¡Bienvenido de nuevo, se te ha echado de menos!
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
          />
        )}
      </Formik>
      <div className="footer">Instituto Federico Villareal</div>
    </>
  );
};

export default FormLogin;
