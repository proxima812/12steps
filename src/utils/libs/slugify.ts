import { slug } from "github-slugger";
// slugify
export const slugify = (content: string) => {
  if (!content) return null;

  return slug(content);
};
