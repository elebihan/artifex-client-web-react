/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PlayIcon from "@mui/icons-material/PlayCircleOutline";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import TypoGraphy from "@mui/material/Typography";
import { LinearProgress, Box, Typography } from "@mui/material";
import ErrorDialog from "components/ErrorDialog";
import { useState, useCallback } from "react";
import { useAppState } from "contexts/AppState";

const SystemUpgradePage = () => {
  const { state } = useAppState();
  const [progress, setProgress] = useState<number>(0);
  const [isUpgrading, setIsUpgrading] = useState<boolean>(false);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const client = state.client;

  const handleUpgrade = useCallback(async () => {
    setProgress(0);
    setIsUpgrading(true);
    try {
      const stream = client.upgrade({});
      for await (const response of stream.responses) {
        setProgress(response.position);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(String(err));
      setOpenErrorDialog(true);
    } finally {
      setIsUpgrading(false);
    }
  }, []);
  const handleErrorDialogClosed = () => {
    setOpenErrorDialog(false);
  };
  const isErrorDialogOpen = Boolean(openErrorDialog);
  return (
    <div>
      <Paper>
        <Stack spacing={1} useFlexGap>
          <TypoGraphy variant="h3">Upgrade</TypoGraphy>
          <Divider />
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={10} pr={2} alignItems="center">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1 }}>
                  <LinearProgress variant="determinate" value={progress} />
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >{`${Math.round(progress)}%`}</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid container item xs={2} alignItems="center">
              <Tooltip title="Upgrade system">
                <Button
                  aria-label="upgrade"
                  onClick={() => handleUpgrade()}
                  disabled={isUpgrading}
                  color="primary"
                  variant="contained"
                  endIcon={<PlayIcon />}
                >
                  Upgrade
                </Button>
              </Tooltip>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Stack>
        <ErrorDialog
          open={isErrorDialogOpen}
          onClose={handleErrorDialogClosed}
          message={errorMessage}
        />
      </Paper>
    </div>
  );
};

export default SystemUpgradePage;
