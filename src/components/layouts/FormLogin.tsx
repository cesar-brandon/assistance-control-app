import { Formik, Form, FormikErrors } from "formik";
import TextField from "@mui/material/TextField";
import InputPassword from "../common/InputPassword";
import Button from "../common/Button";

interface MyFormValues {
  email: string;
  password: string;
}

interface Props {
  event: React.MouseEventHandler<HTMLButtonElement>;
}

const FormLogin: React.FC<Props> = ({ event }) => {
  const initialValues: MyFormValues = { email: "", password: "" };

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
        validate={(values: MyFormValues) => {
          let errors: FormikErrors<MyFormValues> = {};

          if (!values.email) {
            errors.email = "Ingrese su correo";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Dirección de correo electrónico no válida";
          }

          if (!values.password) {
            errors.password = "Ingrese su contraseña";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log(values, "Datos enviados");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form className="Form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="email"
              label="Correo"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <div className="Form_error">{errors.email}</div>
            )}

            <InputPassword
              id={"password"}
              name={"password"}
              value={values.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            {touched.password && errors.password && (
              <div className="Form_error">{errors.password}</div>
            )}

            <Button event={event} />
          </Form>
        )}
      </Formik>
      <div className="footer">Instituto Federico Villareal</div>
    </>
  );
};

export default FormLogin;
