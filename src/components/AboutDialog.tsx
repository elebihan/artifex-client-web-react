/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export interface AboutDialogProps {
  open: boolean;
  onClose: () => void;
}

const AboutDialog = (props: AboutDialogProps) => {
  const { open, onClose } = props;
  const version = import.meta.env.PKG_VERSION;
  console.log(version);
  console.log(import.meta.env);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h6">
            <strong>Artifex</strong>
          </Typography>
          <Typography>Éric Le Bihan</Typography>
          <Typography>{version}</Typography>
          <Typography>Copyright © 2024 Éric Le Bihan</Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AboutDialog;
