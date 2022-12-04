import { objectType } from "nexus";

export const post = objectType({
  name: "Post",
  definition(t) {
    t.id("id");
    t.string("title");
    t.string("description");
  },
});
