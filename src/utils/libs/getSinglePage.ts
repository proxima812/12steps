import { getCollection } from "astro:content";

// Функция для получения страниц, исключая черновики и страницы с определенными ID
export const getSinglePage = async (collection: any) => {
  const allPage = await getCollection(collection);
  const removeIndex = allPage.filter((data: any) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data: any) => !data.data.draft);
  return removeDrafts;
};
