import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "2.4rem", bgcolor: "#fff" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          height: "2.8rem",
          display: "flex",
          alignItems: "center",
          bgcolor: "#fff",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ padding: "0 2rem" }}
        >
          <Tab
            sx={{
              fontSize: "0.7rem",
              fontWeight: "700",
              fontFamily: "Montserrat",
            }}
            label="Asistencias"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              fontSize: "0.7rem",
              fontWeight: "700",
              fontFamily: "Montserrat",
            }}
            label="Reportes"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              fontSize: "0.7rem",
              fontWeight: "700",
              fontFamily: "Montserrat",
            }}
            label="Usuarios"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
    </Box>
  );
}
