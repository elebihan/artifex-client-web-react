/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import { useState } from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PlayIcon from "@mui/icons-material/PlayCircleOutline";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import TypoGraphy from "@mui/material/Typography";
import CopyToClipboardButton from "components/CopyToClipboardButton";
import ErrorDialog from "components/ErrorDialog";
import { useAppState } from "contexts/AppState";
import { InputAdornment } from "@mui/material";

const SystemExecutePage = () => {
  const { state } = useAppState();
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);
  const client = state.client;
  const systemExecute = async () => {
    try {
      const { response } = await client.execute({ command: input });
      // TODO: handle return code and stderr.
      setOutput(response.stdout);
    } catch (err) {
      console.error(err);
      setErrorMessage(String(err));
      setOpenErrorDialog(true);
    }
  };
  const handleErrorDialogClosed = () => {
    setOpenErrorDialog(false);
  };
  const isErrorDialogOpen = Boolean(openErrorDialog);
  return (
    <div>
      <Paper sx={{ position: "relative" }}>
        <Stack spacing={1} useFlexGap>
          <TypoGraphy variant="h3">Execute</TypoGraphy>
          <Divider />
          <Grid container spacing={1}>
            <Grid item xs={10} pr={2}>
              <TextField
                fullWidth
                id="command"
                label="Command"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </Grid>
            <Grid container item xs={2} alignItems="center">
              <Tooltip title="Execute command">
                <Button
                  aria-label="execute"
                  onClick={() => systemExecute()}
                  color="primary"
                  variant="contained"
                  endIcon={<PlayIcon />}
                >
                  Execute
                </Button>
              </Tooltip>
            </Grid>
            <Grid
              item
              xs={12}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <TextField
                InputProps={{
                  readOnly: true,
                  endAdornment: window.isSecureContext &&
                    isHovered &&
                    output && (
                      <InputAdornment position="end">
                        <CopyToClipboardButton text={output} />
                      </InputAdornment>
                    ),
                }}
                multiline
                fullWidth
                minRows={10}
                maxRows={20}
                value={output}
              />
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

export default SystemExecutePage;
