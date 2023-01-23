import React from "react";
import { Button as ButtonUi } from "@mui/material";

const Style = {
  mt: 4,
  borderRadius: 2,
  bgcolor: "#0082c8",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#0092e0",
  },
};

const Button: React.FC = () => {
  return (
    <ButtonUi sx={Style} type="submit" variant="contained" disableElevation>
      Aceptar
    </ButtonUi>
  );
};

export default Button;
