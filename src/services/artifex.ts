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
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message artifex.InspectRequest
 */
export interface InspectRequest {
}
/**
 * Reply from machine inspection
 *
 * @generated from protobuf message artifex.InspectReply
 */
export interface InspectReply {
    /**
     * The version of the kernel the machine is running on
     *
     * @generated from protobuf field: string kernel_version = 1;
     */
    kernelVersion: string;
    /**
     * The time since system boot, in seconds.
     *
     * @generated from protobuf field: uint64 system_uptime = 2;
     */
    systemUptime: bigint;
}
/**
 * @generated from protobuf message artifex.ExecuteRequest
 */
export interface ExecuteRequest {
    /**
     * The command to execute on the machine.
     *
     * @generated from protobuf field: string command = 1;
     */
    command: string;
}
/**
 * Reply from the execution of a command
 *
 * @generated from protobuf message artifex.ExecuteReply
 */
export interface ExecuteReply {
    /**
     * Standard output
     *
     * @generated from protobuf field: string stdout = 1;
     */
    stdout: string;
    /**
     * Standard error
     *
     * @generated from protobuf field: string stderr = 2;
     */
    stderr: string;
    /**
     * Command exit code
     *
     * @generated from protobuf field: int32 code = 3;
     */
    code: number;
}
/**
 * @generated from protobuf message artifex.UpgradeRequest
 */
export interface UpgradeRequest {
}
/**
 * Reply streamed when upgrading the system of a machine
 *
 * @generated from protobuf message artifex.UpgradeReply
 */
export interface UpgradeReply {
    /**
     * @generated from protobuf field: artifex.UpgradeReply.Status status = 1;
     */
    status: UpgradeReply_Status;
    /**
     * @generated from protobuf field: int32 position = 2;
     */
    position: number;
}
/**
 * @generated from protobuf enum artifex.UpgradeReply.Status
 */
export enum UpgradeReply_Status {
    /**
     * @generated from protobuf enum value: RUNNING = 0;
     */
    RUNNING = 0,
    /**
     * @generated from protobuf enum value: SUCCESS = 1;
     */
    SUCCESS = 1,
    /**
     * @generated from protobuf enum value: FAILURE = 2;
     */
    FAILURE = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class InspectRequest$Type extends MessageType<InspectRequest> {
    constructor() {
        super("artifex.InspectRequest", []);
    }
    create(value?: PartialMessage<InspectRequest>): InspectRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<InspectRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InspectRequest): InspectRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: InspectRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message artifex.InspectRequest
 */
export const InspectRequest = new InspectRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InspectReply$Type extends MessageType<InspectReply> {
    constructor() {
        super("artifex.InspectReply", [
            { no: 1, name: "kernel_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "system_uptime", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<InspectReply>): InspectReply {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.kernelVersion = "";
        message.systemUptime = 0n;
        if (value !== undefined)
            reflectionMergePartial<InspectReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InspectReply): InspectReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string kernel_version */ 1:
                    message.kernelVersion = reader.string();
                    break;
                case /* uint64 system_uptime */ 2:
                    message.systemUptime = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: InspectReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string kernel_version = 1; */
        if (message.kernelVersion !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.kernelVersion);
        /* uint64 system_uptime = 2; */
        if (message.systemUptime !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.systemUptime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message artifex.InspectReply
 */
export const InspectReply = new InspectReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecuteRequest$Type extends MessageType<ExecuteRequest> {
    constructor() {
        super("artifex.ExecuteRequest", [
            { no: 1, name: "command", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ExecuteRequest>): ExecuteRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.command = "";
        if (value !== undefined)
            reflectionMergePartial<ExecuteRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExecuteRequest): ExecuteRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string command */ 1:
                    message.command = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ExecuteRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string command = 1; */
        if (message.command !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.command);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message artifex.ExecuteRequest
 */
export const ExecuteRequest = new ExecuteRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecuteReply$Type extends MessageType<ExecuteReply> {
    constructor() {
        super("artifex.ExecuteReply", [
            { no: 1, name: "stdout", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "stderr", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "code", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<ExecuteReply>): ExecuteReply {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.stdout = "";
        message.stderr = "";
        message.code = 0;
        if (value !== undefined)
            reflectionMergePartial<ExecuteReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExecuteReply): ExecuteReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string stdout */ 1:
                    message.stdout = reader.string();
                    break;
                case /* string stderr */ 2:
                    message.stderr = reader.string();
                    break;
                case /* int32 code */ 3:
                    message.code = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ExecuteReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string stdout = 1; */
        if (message.stdout !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.stdout);
        /* string stderr = 2; */
        if (message.stderr !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.stderr);
        /* int32 code = 3; */
        if (message.code !== 0)
            writer.tag(3, WireType.Varint).int32(message.code);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message artifex.ExecuteReply
 */
export const ExecuteReply = new ExecuteReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpgradeRequest$Type extends MessageType<UpgradeRequest> {
    constructor() {
        super("artifex.UpgradeRequest", []);
    }
    create(value?: PartialMessage<UpgradeRequest>): UpgradeRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<UpgradeRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpgradeRequest): UpgradeRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: UpgradeRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message artifex.UpgradeRequest
 */
export const UpgradeRequest = new UpgradeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpgradeReply$Type extends MessageType<UpgradeReply> {
    constructor() {
        super("artifex.UpgradeReply", [
            { no: 1, name: "status", kind: "enum", T: () => ["artifex.UpgradeReply.Status", UpgradeReply_Status] },
            { no: 2, name: "position", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<UpgradeReply>): UpgradeReply {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.status = 0;
        message.position = 0;
        if (value !== undefined)
            reflectionMergePartial<UpgradeReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpgradeReply): UpgradeReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* artifex.UpgradeReply.Status status */ 1:
                    message.status = reader.int32();
                    break;
                case /* int32 position */ 2:
                    message.position = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UpgradeReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* artifex.UpgradeReply.Status status = 1; */
        if (message.status !== 0)
            writer.tag(1, WireType.Varint).int32(message.status);
        /* int32 position = 2; */
        if (message.position !== 0)
            writer.tag(2, WireType.Varint).int32(message.position);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message artifex.UpgradeReply
 */
export const UpgradeReply = new UpgradeReply$Type();
/**
 * @generated ServiceType for protobuf service artifex.Artifex
 */
export const Artifex = new ServiceType("artifex.Artifex", [
    { name: "Inspect", options: {}, I: InspectRequest, O: InspectReply },
    { name: "Execute", options: {}, I: ExecuteRequest, O: ExecuteReply },
    { name: "Upgrade", serverStreaming: true, options: {}, I: UpgradeRequest, O: UpgradeReply }
]);