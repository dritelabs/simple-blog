// package: post
// file: post.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Post extends jspb.Message { 
    getId(): number;
    setId(value: number): Post;
    getTitle(): string;
    setTitle(value: string): Post;
    getDescription(): string;
    setDescription(value: string): Post;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Post;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Post;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Post.AsObject;
    static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Post;
    static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
    export type AsObject = {
        id: number,
        title: string,
        description: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreatePostRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): CreatePostRequest;
    getDescription(): string;
    setDescription(value: string): CreatePostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatePostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreatePostRequest): CreatePostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatePostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatePostRequest;
    static deserializeBinaryFromReader(message: CreatePostRequest, reader: jspb.BinaryReader): CreatePostRequest;
}

export namespace CreatePostRequest {
    export type AsObject = {
        title: string,
        description: string,
    }
}

export class GetPostRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetPostRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPostRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetPostRequest): GetPostRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPostRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPostRequest;
    static deserializeBinaryFromReader(message: GetPostRequest, reader: jspb.BinaryReader): GetPostRequest;
}

export namespace GetPostRequest {
    export type AsObject = {
        id: number,
    }
}

export class PostResponse extends jspb.Message { 

    hasPost(): boolean;
    clearPost(): void;
    getPost(): Post | undefined;
    setPost(value?: Post): PostResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostResponse): PostResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostResponse;
    static deserializeBinaryFromReader(message: PostResponse, reader: jspb.BinaryReader): PostResponse;
}

export namespace PostResponse {
    export type AsObject = {
        post?: Post.AsObject,
    }
}

export class ListPostsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPostsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListPostsRequest): ListPostsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPostsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPostsRequest;
    static deserializeBinaryFromReader(message: ListPostsRequest, reader: jspb.BinaryReader): ListPostsRequest;
}

export namespace ListPostsRequest {
    export type AsObject = {
    }
}

export class ListPostsResponse extends jspb.Message { 
    clearPostsList(): void;
    getPostsList(): Array<Post>;
    setPostsList(value: Array<Post>): ListPostsResponse;
    addPosts(value?: Post, index?: number): Post;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListPostsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListPostsResponse): ListPostsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListPostsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListPostsResponse;
    static deserializeBinaryFromReader(message: ListPostsResponse, reader: jspb.BinaryReader): ListPostsResponse;
}

export namespace ListPostsResponse {
    export type AsObject = {
        postsList: Array<Post.AsObject>,
    }
}
