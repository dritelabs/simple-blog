import grpc from "@grpc/grpc-js";
import { BlogClient } from "./proto/blog_grpc_pb";

export const client = new BlogClient(
  "0.0.0.0:5001",
  grpc.credentials.createInsecure()
);
