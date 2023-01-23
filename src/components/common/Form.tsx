import React from "react";
import { IFormLogin } from "../layouts/FormLogin";
import { FormikErrors } from "formik";
import TextField from "@mui/material/TextField";
import InputPassword from "../common/InputPassword";
import Button from "../common/Button";

interface Props {
  values: IFormLogin;
  errors: FormikErrors<IFormLogin>;
  touched: any;
  handleChange: any;
  handleBlur: any;
  handleSubmit: any;
}

const Form: React.FC<Props> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <form className="Form" onSubmit={handleSubmit}>
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

      <Button />
    </form>
  );
};

export default Form;
