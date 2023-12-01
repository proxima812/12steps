import { getSinglePage } from "./libs/getSinglePage";

// Функция для получения всех таксономий
export const getTaxonomy = async (collection, name) => {
  const singlePages = await getSinglePage(collection);
  const taxonomyPages = singlePages.map((page: any) => page.data[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i];
    for (let j = 0; j < categoryArray.length; j++) {
      // customSlugify <-> slugify
      taxonomies.push(categoryArray[j]); // Используйте customSlugify здесь
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  return taxonomy;
};
