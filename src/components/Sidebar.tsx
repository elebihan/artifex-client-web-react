/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import SidebarItem, { SidebarItemProps } from "components/SidebarItem";

export interface SidebarProps {
  items: SidebarItemProps[];
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  return (
    <Drawer
      sx={{
        width: "15%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "15%",
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {props.items.map((item, index) => (
            <SidebarItem {...item} key={index} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
