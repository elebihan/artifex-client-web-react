/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import { Divider, Stack, Typography } from "@mui/material";

const WelcomePage = () => {
  return (
    <div>
      <Stack spacing={1} useFlexGap>
        <Typography variant="h3">Welcome</Typography>
        <Divider />
      </Stack>
    </div>
  );
};

export default WelcomePage;
