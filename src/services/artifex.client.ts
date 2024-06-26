// @ts-nocheck
// @generated by protobuf-ts 2.9.3
// @generated from protobuf file "artifex.proto" (package "artifex", syntax proto3)
// tslint:disable
//
//
// Copyright (C) 2022 Eric Le Bihan <eric.le.bihan.dev@free.fr>
//
// SPDX-License-Identifier: MIT
//
//
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Artifex } from "./artifex";
import type { UpgradeReply } from "./artifex";
import type { UpgradeRequest } from "./artifex";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { ExecuteReply } from "./artifex";
import type { ExecuteRequest } from "./artifex";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { InspectReply } from "./artifex";
import type { InspectRequest } from "./artifex";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Service to manage a machine
 *
 * @generated from protobuf service artifex.Artifex
 */
export interface IArtifexClient {
    /**
     * Inspect machine
     *
     * @generated from protobuf rpc: Inspect(artifex.InspectRequest) returns (artifex.InspectReply);
     */
    inspect(input: InspectRequest, options?: RpcOptions): UnaryCall<InspectRequest, InspectReply>;
    /**
     * Execute a command on a machine
     *
     * @generated from protobuf rpc: Execute(artifex.ExecuteRequest) returns (artifex.ExecuteReply);
     */
    execute(input: ExecuteRequest, options?: RpcOptions): UnaryCall<ExecuteRequest, ExecuteReply>;
    /**
     * Upgrade a the system of a machine
     *
     * @generated from protobuf rpc: Upgrade(artifex.UpgradeRequest) returns (stream artifex.UpgradeReply);
     */
    upgrade(input: UpgradeRequest, options?: RpcOptions): ServerStreamingCall<UpgradeRequest, UpgradeReply>;
}
/**
 * Service to manage a machine
 *
 * @generated from protobuf service artifex.Artifex
 */
export class ArtifexClient implements IArtifexClient, ServiceInfo {
    typeName = Artifex.typeName;
    methods = Artifex.methods;
    options = Artifex.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Inspect machine
     *
     * @generated from protobuf rpc: Inspect(artifex.InspectRequest) returns (artifex.InspectReply);
     */
    inspect(input: InspectRequest, options?: RpcOptions): UnaryCall<InspectRequest, InspectReply> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<InspectRequest, InspectReply>("unary", this._transport, method, opt, input);
    }
    /**
     * Execute a command on a machine
     *
     * @generated from protobuf rpc: Execute(artifex.ExecuteRequest) returns (artifex.ExecuteReply);
     */
    execute(input: ExecuteRequest, options?: RpcOptions): UnaryCall<ExecuteRequest, ExecuteReply> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ExecuteRequest, ExecuteReply>("unary", this._transport, method, opt, input);
    }
    /**
     * Upgrade a the system of a machine
     *
     * @generated from protobuf rpc: Upgrade(artifex.UpgradeRequest) returns (stream artifex.UpgradeReply);
     */
    upgrade(input: UpgradeRequest, options?: RpcOptions): ServerStreamingCall<UpgradeRequest, UpgradeReply> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpgradeRequest, UpgradeReply>("serverStreaming", this._transport, method, opt, input);
    }
}
