import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

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

const sx = {
  constentSubMenu: {
    width: "100%",
    height: "2.4rem",
    bgcolor: "#fff",
  },
  contentTabs: {
    borderBottom: 1,
    borderColor: "divider",
    height: "2.8rem",
    display: "flex",
    alignItems: "center",
    bgcolor: "#fff",
  },
  tab: {
    fontSize: "0.7rem",
    fontWeight: "700",
    fontFamily: "Montserrat",
  },
};

const SubMenu: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={sx.constentSubMenu}>
      <Box sx={sx.contentTabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="submenu tabs"
          sx={{ padding: "0 2rem" }}
        >
          <Tab
            sx={sx.tab}
            label="Asistencias"
            component={Link}
            to="/privado/asistencia"
            {...a11yProps(0)}
          />
          <Tab
            sx={sx.tab}
            label="registro"
            component={Link}
            to="/privado/registro"
            {...a11yProps(1)}
          />
          <Tab
            sx={sx.tab}
            label="Mantenimiento"
            component={Link}
            to="/privado/mantenimiento"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default SubMenu;
