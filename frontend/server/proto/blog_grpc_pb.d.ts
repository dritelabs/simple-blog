// package: blog
// file: blog.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as blog_pb from "./blog_pb";
import * as post_pb from "./post_pb";

interface IBlogService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createPost: IBlogService_ICreatePost;
    getPost: IBlogService_IGetPost;
    listPosts: IBlogService_IListPosts;
}

interface IBlogService_ICreatePost extends grpc.MethodDefinition<post_pb.CreatePostRequest, post_pb.PostResponse> {
    path: "/blog.Blog/CreatePost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.CreatePostRequest>;
    requestDeserialize: grpc.deserialize<post_pb.CreatePostRequest>;
    responseSerialize: grpc.serialize<post_pb.PostResponse>;
    responseDeserialize: grpc.deserialize<post_pb.PostResponse>;
}
interface IBlogService_IGetPost extends grpc.MethodDefinition<post_pb.GetPostRequest, post_pb.PostResponse> {
    path: "/blog.Blog/GetPost";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.GetPostRequest>;
    requestDeserialize: grpc.deserialize<post_pb.GetPostRequest>;
    responseSerialize: grpc.serialize<post_pb.PostResponse>;
    responseDeserialize: grpc.deserialize<post_pb.PostResponse>;
}
interface IBlogService_IListPosts extends grpc.MethodDefinition<post_pb.ListPostsRequest, post_pb.ListPostsResponse> {
    path: "/blog.Blog/ListPosts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<post_pb.ListPostsRequest>;
    requestDeserialize: grpc.deserialize<post_pb.ListPostsRequest>;
    responseSerialize: grpc.serialize<post_pb.ListPostsResponse>;
    responseDeserialize: grpc.deserialize<post_pb.ListPostsResponse>;
}

export const BlogService: IBlogService;

export interface IBlogServer extends grpc.UntypedServiceImplementation {
    createPost: grpc.handleUnaryCall<post_pb.CreatePostRequest, post_pb.PostResponse>;
    getPost: grpc.handleUnaryCall<post_pb.GetPostRequest, post_pb.PostResponse>;
    listPosts: grpc.handleUnaryCall<post_pb.ListPostsRequest, post_pb.ListPostsResponse>;
}

export interface IBlogClient {
    createPost(request: post_pb.CreatePostRequest, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    createPost(request: post_pb.CreatePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    createPost(request: post_pb.CreatePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    getPost(request: post_pb.GetPostRequest, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    getPost(request: post_pb.GetPostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    getPost(request: post_pb.GetPostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    listPosts(request: post_pb.ListPostsRequest, callback: (error: grpc.ServiceError | null, response: post_pb.ListPostsResponse) => void): grpc.ClientUnaryCall;
    listPosts(request: post_pb.ListPostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.ListPostsResponse) => void): grpc.ClientUnaryCall;
    listPosts(request: post_pb.ListPostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.ListPostsResponse) => void): grpc.ClientUnaryCall;
}

export class BlogClient extends grpc.Client implements IBlogClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createPost(request: post_pb.CreatePostRequest, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    public createPost(request: post_pb.CreatePostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    public createPost(request: post_pb.CreatePostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    public getPost(request: post_pb.GetPostRequest, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    public getPost(request: post_pb.GetPostRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    public getPost(request: post_pb.GetPostRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.PostResponse) => void): grpc.ClientUnaryCall;
    public listPosts(request: post_pb.ListPostsRequest, callback: (error: grpc.ServiceError | null, response: post_pb.ListPostsResponse) => void): grpc.ClientUnaryCall;
    public listPosts(request: post_pb.ListPostsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: post_pb.ListPostsResponse) => void): grpc.ClientUnaryCall;
    public listPosts(request: post_pb.ListPostsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: post_pb.ListPostsResponse) => void): grpc.ClientUnaryCall;
}
