/*
 * Copyright (C) 2024 Eric Le Bihan <eric.le.bihan.dev@free.fr>
 *
 * SPDX-License-Identifier: MIT
 */

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PKG_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
