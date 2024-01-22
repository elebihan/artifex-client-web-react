/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import { useState } from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import SettingsDialog from "components/SettingsDialog";
import AboutDialog from "components/AboutDialog";

const ApplicationMenu = () => {
  const [openSettingsDialog, setOpenSettingsDialog] = useState(false);
  const [openAboutDialog, setOpenAboutDialog] = useState(false);

  const handleSettingsClicked = () => {
    setOpenSettingsDialog(true);
  };
  const handleSettingsDialogClosed = () => {
    setOpenSettingsDialog(false);
  };
  const isSettingsDialogOpen = Boolean(openSettingsDialog);
  const handleAboutClicked = () => {
    setOpenAboutDialog(true);
  };
  const handleAboutDialogClosed = () => {
    setOpenAboutDialog(false);
  };
  const isAboutDialogOpen = Boolean(openAboutDialog);
  return (
    <Paper>
      <MenuList>
        <MenuItem onClick={handleSettingsClicked}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleAboutClicked}>
          <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>About Artifex</ListItemText>
        </MenuItem>
      </MenuList>
      <SettingsDialog
        open={isSettingsDialogOpen}
        onClose={handleSettingsDialogClosed}
      />
      <AboutDialog open={isAboutDialogOpen} onClose={handleAboutDialogClosed} />
    </Paper>
  );
};

export default ApplicationMenu;
