import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Link } from "react-router-dom";

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
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SubMenu: React.FC = () => {
  const [value, setValue] = useState(0);

  const routes = {
    0: "/privado/asistencia",
    1: "/",
    2: "/",
  };

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
