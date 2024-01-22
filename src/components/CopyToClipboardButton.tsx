/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { IconButton } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";

export interface CopyToClipboardButtonProps {
  text: string;
}

const CopyToClipboardButton = (props: CopyToClipboardButtonProps) => {
  const { text } = props;
  const [open, setOpen] = useState(false);
  const handleClick = async () => {
    setOpen(true);
    if ("clipboard" in navigator && window.isSecureContext) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <ContentCopy />
      </IconButton>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
    </>
  );
};

export default CopyToClipboardButton;
