import { customSlugify } from "../libs/customSlugify";

const taxonomyFilter = (posts: any[], name: string, key: any) =>
  posts.filter((post) =>
    post.data[name].map((name: string) => customSlugify(name)).includes(key),
  );

export default taxonomyFilter;
