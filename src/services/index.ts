/*
 * SPDX-FileCopyrightText: 2024 Eric Le Bihan
 *
 * SPDX-License-Identifier: MIT
 */

import { ArtifexClient } from "./artifex.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

const createClient = (url: string): ArtifexClient => {
  const transport = new GrpcWebFetchTransport({
    baseUrl: url,
    format: "binary",
  });
  return new ArtifexClient(transport);
};

export { ArtifexClient, createClient };
