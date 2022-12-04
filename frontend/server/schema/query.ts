import { extendType, intArg, list, nonNull, stringArg } from "nexus";
import { GetPostRequest, ListPostsRequest } from "../proto/post_pb";
import { client } from "../client";

export const query = extendType({
  type: "Query",
  definition(t) {
    t.field("post", {
      type: "Post",
      args: {
        id: nonNull(intArg()),
      },
      async resolve(_, args, context) {
        return new Promise((resolve, reject) => {
          const req = new GetPostRequest();

          req.setId(args.id);

          client.getPost(req, (err, res) => {
            if (err) {
              return reject(err);
            }

            const post = res.getPost();

            if (!post) {
              return reject(new Error("Not found"));
            }

            resolve({
              id: post.getId().toString(),
              title: post.getTitle(),
              description: post.getDescription(),
            });
          });
        });
      },
    });

    t.field("posts", {
      type: list("Post"),
      args: {},
      async resolve(_, args, context) {
        return new Promise((resolve, reject) => {
          const req = new ListPostsRequest();

          client.listPosts(req, (err, res) => {
            if (err) {
              return reject(err);
            }

            const posts = res.getPostsList();

            resolve(
              posts.map((post) => ({
                id: post.getId().toString(),
                title: post.getTitle(),
                description: post.getDescription(),
              }))
            );
          });
        });
      },
    });
  },
});
