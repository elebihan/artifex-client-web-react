/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Popover from "@mui/material/Popover";
import ApplicationMenu from "components/ApplicationMenu";

const ApplicationBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const isOpen = Boolean(anchorEl);
  return (
    <AppBar
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      position="fixed"
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Artifex
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleOpenMenu}
        >
          <MenuIcon />
        </IconButton>
        <Popover
          open={isOpen}
          anchorEl={anchorEl}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <ApplicationMenu />
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
