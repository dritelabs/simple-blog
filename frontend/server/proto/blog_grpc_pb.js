// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var post_pb = require('./post_pb.js');

function serialize_post_CreatePostRequest(arg) {
  if (!(arg instanceof post_pb.CreatePostRequest)) {
    throw new Error('Expected argument of type post.CreatePostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_CreatePostRequest(buffer_arg) {
  return post_pb.CreatePostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_GetPostRequest(arg) {
  if (!(arg instanceof post_pb.GetPostRequest)) {
    throw new Error('Expected argument of type post.GetPostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_GetPostRequest(buffer_arg) {
  return post_pb.GetPostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_ListPostsRequest(arg) {
  if (!(arg instanceof post_pb.ListPostsRequest)) {
    throw new Error('Expected argument of type post.ListPostsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_ListPostsRequest(buffer_arg) {
  return post_pb.ListPostsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_ListPostsResponse(arg) {
  if (!(arg instanceof post_pb.ListPostsResponse)) {
    throw new Error('Expected argument of type post.ListPostsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_ListPostsResponse(buffer_arg) {
  return post_pb.ListPostsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_post_PostResponse(arg) {
  if (!(arg instanceof post_pb.PostResponse)) {
    throw new Error('Expected argument of type post.PostResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_post_PostResponse(buffer_arg) {
  return post_pb.PostResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BlogService = exports.BlogService = {
  createPost: {
    path: '/blog.Blog/CreatePost',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.CreatePostRequest,
    responseType: post_pb.PostResponse,
    requestSerialize: serialize_post_CreatePostRequest,
    requestDeserialize: deserialize_post_CreatePostRequest,
    responseSerialize: serialize_post_PostResponse,
    responseDeserialize: deserialize_post_PostResponse,
  },
  getPost: {
    path: '/blog.Blog/GetPost',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.GetPostRequest,
    responseType: post_pb.PostResponse,
    requestSerialize: serialize_post_GetPostRequest,
    requestDeserialize: deserialize_post_GetPostRequest,
    responseSerialize: serialize_post_PostResponse,
    responseDeserialize: deserialize_post_PostResponse,
  },
  listPosts: {
    path: '/blog.Blog/ListPosts',
    requestStream: false,
    responseStream: false,
    requestType: post_pb.ListPostsRequest,
    responseType: post_pb.ListPostsResponse,
    requestSerialize: serialize_post_ListPostsRequest,
    requestDeserialize: deserialize_post_ListPostsRequest,
    responseSerialize: serialize_post_ListPostsResponse,
    responseDeserialize: deserialize_post_ListPostsResponse,
  },
};

exports.BlogClient = grpc.makeGenericClientConstructor(BlogService);
