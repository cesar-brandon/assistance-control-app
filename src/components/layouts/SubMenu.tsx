import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

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
  tabs: {
    padding: "0 2rem",
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#f38911",
    },
  },
  tab: {
    fontSize: "0.7rem",
    fontWeight: "700",
    fontFamily: "Montserrat",
  },
};

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  padding: "0 2rem",
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#f97316",
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(() => ({
  textTransform: "none",
  fontWeight: "600",
  fontSize: "0.8rem",
  marginRight: "0.5rem",
  color: "#333",
  "&.Mui-selected": {
    color: "#f97316",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#c2410c",
  },
  "&:hover": {
    color: "#f97316",
  },
}));

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
    1: "/privado/registro",
    2: "/privado/mantenimiento",
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={sx.constentSubMenu}>
      <Box sx={sx.contentTabs}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="submenu tabs"
        >
          <StyledTab
            sx={sx.tab}
            label="Asistencias"
            component={Link}
            to="/privado/asistencia"
            {...a11yProps(0)}
          />
          <StyledTab
            sx={sx.tab}
            label="registro"
            component={Link}
            to="/privado/registro"
            {...a11yProps(1)}
          />
          <StyledTab
            sx={sx.tab}
            label="Mantenimiento"
            component={Link}
            to="/privado/mantenimiento"
            {...a11yProps(2)}
          />
        </StyledTabs>
      </Box>
    </Box>
  );
};

export default SubMenu;
