import React from "react";
import { Stack, Chip } from "@mui/material";
import { useSelector } from "react-redux";

const AttendanceTracker: React.FC = () => {
  const addmited = useSelector(
    (state: any) =>
      state.student.students.filter(
        (student: any) => student.status === "Puntual"
      ).length
  );
  const slopes = useSelector(
    (state: any) =>
      state.student.students.filter(
        (student: any) => student.status === "Ausente"
      ).length
  );

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="center"
      sx={{ gridArea: "tracker" }}
    >
      <Chip
        sx={{
          color: "#fff",
          bgcolor: "#4488cc",
          width: "8rem",
        }}
        label={`${addmited} Ingresados`}
      />
      <Chip
        sx={{
          width: "8rem",
        }}
        label={`${slopes} Ausentes`}
      />
    </Stack>
  );
};

export default AttendanceTracker;
