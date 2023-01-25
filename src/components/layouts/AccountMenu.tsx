import React, { useState } from "react";
import {
  Tooltip,
  IconButton,
  Divider,
  ListItemIcon,
  MenuItem,
  Menu,
  Avatar,
  Box,
} from "@mui/material";
import { Settings, PersonAdd } from "@mui/icons-material";
import { LogoutComponent } from ".";
import { PublicRoutes } from "../../router/routes";

const AccountMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const currentPath = window.location.pathname.slice(1);
  return (
    <>
      {currentPath !== PublicRoutes.LOGIN && (
        <div className="AccountMenu">
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Ajustes de cuenta">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ bgcolor: "#4488cc", width: 32, height: 32 }}>
                  J
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 0.5,
                borderRadius: "15px",
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar />
              Perfil
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Agregar otro usuario
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Ajustes
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <LogoutComponent />
            </MenuItem>
          </Menu>
        </div>
      )}
    </>
  );
};

export default AccountMenu;
