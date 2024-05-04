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
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import TypoGraphy from "@mui/material/Typography";
import ErrorDialog from "components/ErrorDialog";
import { Folder } from "@mui/icons-material";
import { MuiFileInput } from "mui-file-input";
import { useAppState } from "contexts/AppState";

import init, { execute_batch } from "batch-exec";

const BatchPage = () => {
  const { state } = useAppState();
  const [inputFile, setInputFile] = useState<File | null>(null);
  const [output, setOutput] = useState<string>("");
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const readFileAsText = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const batchExecute = () => {
    init()
      .then(async () => {
        if (!inputFile) {
          throw new Error("No file selected");
        }
        const text = await readFileAsText(inputFile!);
        return text;
      })
      .then(async (text: string) => {
        const report = await execute_batch(state.url, text);
        setOutput(report);
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(String(err));
        setOpenErrorDialog(true);
      });
  };
  const handleFileChange = (file: File) => {
    setInputFile(file);
  };
  const handleErrorDialogClosed = () => {
    setOpenErrorDialog(false);
  };
  const isErrorDialogOpen = Boolean(openErrorDialog);
  return (
    <div>
      <Paper sx={{ position: "relative" }}>
        <Stack spacing={1} useFlexGap>
          <TypoGraphy variant="h3">Batch</TypoGraphy>
          <Divider />
          <Grid container spacing={1}>
            <Grid item xs={10} pr={2}>
              <MuiFileInput
                fullWidth
                label="Batch file"
                InputProps={{
                  inputProps: {
                    accept: ".txt",
                  },
                  startAdornment: (
                    <Tooltip title="Browse batch files">
                      <Folder />
                    </Tooltip>
                  ),
                }}
                value={inputFile}
                onChange={handleFileChange}
              />
            </Grid>
            <Grid container item xs={2} alignItems="center">
              <Tooltip title="Execute batch">
                <Button
                  aria-label="execute"
                  onClick={() => batchExecute()}
                  color="primary"
                  variant="contained"
                >
                  Execute
                </Button>
              </Tooltip>
            </Grid>
            <Grid item xs={12}>
              <TextField
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

export default BatchPage;
