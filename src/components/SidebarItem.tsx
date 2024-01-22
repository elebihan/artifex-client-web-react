/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export interface SidebarItemProps {
  label: string;
  link: string;
  items: SidebarItemProps[];
}

const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const { label, link, items } = props;
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const SidebarRootItem: React.FC = () => {
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={label} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 2 }}>
            {items.map((item, index) => (
              <SidebarItem {...item} key={index} />
            ))}
          </List>
        </Collapse>
      </>
    );
  };

  const SidebarChildItem: React.FC = () => {
    return (
      <>
        <ListItem button component={Link} to={link}>
          <ListItemText primary={label} />
        </ListItem>
      </>
    );
  };
  return (
    <>
      {isExpandable && <SidebarRootItem />}
      {!isExpandable && <SidebarChildItem />}
    </>
  );
};

export default SidebarItem;
