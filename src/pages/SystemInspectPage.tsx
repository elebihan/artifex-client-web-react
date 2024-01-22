/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import { useState } from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TypoGraphy from "@mui/material/Typography";
import ErrorDialog from "components/ErrorDialog";
import { useAppState } from "contexts/AppState";
import { InspectReply } from "services/artifex";

const SystemInspectPage = () => {
  const { state } = useAppState();
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [information, setInformation] = useState<InspectReply>({
    kernelVersion: "",
    systemUptime: BigInt(0),
  });
  const client = state.client;
  const systemInspect = async () => {
    try {
      const { response } = await client.inspect({});
      setInformation(response);
      console.log(response);
    } catch (err) {
      console.error(err);
      setErrorMessage(String(err));
      setOpenErrorDialog(true);
    }
  };
  const formatSeconds = (seconds: bigint): string => {
    const days = String(seconds / 86400n);
    const hours = String((seconds % 86400n) / 3600n);
    const minutes = String((seconds % 3600n) / 60n);
    const remainingSeconds = String(seconds % 60n);

    return `${days} days, ${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`;
  };
  const formatValue = (value: bigint | string): string => {
    if (typeof value === "bigint") {
      return formatSeconds(value);
    } else {
      return value;
    }
  };
  const handleErrorDialogClosed = () => {
    setOpenErrorDialog(false);
  };
  const isErrorDialogOpen = Boolean(openErrorDialog);
  return (
    <div>
      <Paper>
        <Stack spacing={1} useFlexGap>
          <TypoGraphy variant="h3">Inspect</TypoGraphy>
          <Divider />
          <Grid container>
            <Grid item xs={10}>
              <TypoGraphy variant="h4">System Information</TypoGraphy>
            </Grid>
            <Grid container item xs={2} alignItems="center">
              <Button
                aria-label="refresh"
                onClick={() => systemInspect()}
                color="primary"
                variant="contained"
                endIcon={<RefreshIcon />}
              >
                Refresh
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table aria-label="system-information">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.keys(information!).map((key, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {key}
                        </TableCell>
                        <TableCell align="right">
                          {formatValue(
                            information![key as keyof typeof information],
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
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

export default SystemInspectPage;
