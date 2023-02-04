import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
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
  component: {};
  to: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(() => ({
  textTransform: "none",
  fontFamily: "Montserrat",
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

const SubMenu: React.FC = () => {
  const [value, setValue] = useState(0);
  const location = useLocation();

  const routes = [
    "/privado/asistencia",
    "/privado/registro",
    "/privado/mantenimiento",
  ];

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  useEffect(() => {
    const routeIndex = routes.indexOf(location.pathname);
    if (routeIndex !== -1) {
      setValue(routeIndex);
    }
  }, [location.pathname]);

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
            label="Asistencias"
            component={Link}
            to="/privado/asistencia"
            {...a11yProps(0)}
          />
          <StyledTab
            label="registro"
            component={Link}
            to="/privado/registro"
            {...a11yProps(1)}
          />
        </StyledTabs>
      </Box>
    </Box>
  );
};

export default SubMenu;
