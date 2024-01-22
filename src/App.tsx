/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import React from "react";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ApplicationBar from "components/ApplicationBar";
import Sidebar from "components/Sidebar";
import SystemInspectPage from "pages/SystemInspectPage";
import SystemExecutePage from "pages/SystemExecutePage";
import SystemUpgradePage from "pages/SystemUpgradePage";
import WelcomePage from "pages/WelcomePage";
import ErrorPage from "pages/ErrorPage";
import "App.css";

const Root: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <ApplicationBar />
        <Sidebar
          items={[
            {
              label: "System",
              link: "",
              items: [
                { label: "Inspect", link: "/system/inspect", items: [] },
                { label: "Execute", link: "/system/execute", items: [] },
                { label: "Upgrade", link: "/system/upgrade", items: [] },
              ],
            },
          ]}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: "system/inspect",
        element: <SystemInspectPage />,
      },
      {
        path: "system/execute",
        element: <SystemExecutePage />,
      },
      {
        path: "system/upgrade",
        element: <SystemUpgradePage />,
      },
    ],
  },
]);

const App: React.FC = () => {
  console.log(router);
  return <RouterProvider router={router} />;
};
export default App;
