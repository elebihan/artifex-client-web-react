/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import {
  AutocompleteInput,
  RefAutocompleteInput,
} from "components/AutocompleteInput";
import { useAppState } from "contexts/AppState";

export interface SettingsDialogProps {
  open: boolean;
  onClose: () => void;
}

const SettingsDialog = (props: SettingsDialogProps) => {
  const { open, onClose } = props;
  const autocompleteInputRef = useRef<RefAutocompleteInput>(null);
  const { state, dispatch } = useAppState();
  const [serverUrl, setServerUrl] = useState<string | null>(state.url);
  const handleServerUrlChanged = (url: string | null) => {
    setServerUrl(url);
  };
  const handleApplyClicked = () => {
    if (autocompleteInputRef.current !== null) {
      autocompleteInputRef.current.storeValues();
      dispatch({ type: "SET_SERVER_URL", payload: serverUrl! });
      console.log("Settings applied");
      onClose();
    }
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <Stack>
          <Typography variant="h6">Server</Typography>
          <FormControl variant="standard">
            <AutocompleteInput
              defaultValue={state.url}
              storageKey="server-urls"
              storageCapacity="5"
              onChange={handleServerUrlChanged}
              ref={autocompleteInputRef}
            />
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={onClose}>
          Cancel
        </Button>
        <Button color="info" onClick={handleApplyClicked}>
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingsDialog;
