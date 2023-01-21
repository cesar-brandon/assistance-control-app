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

interface Props {
  event: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ event }) => {
  return (
    <ButtonUi
      onClick={() => event()}
      sx={Style}
      type="submit"
      variant="contained"
      disableElevation
    >
      Aceptar
    </ButtonUi>
  );
};

export default Button;
