import { getCollection } from "astro:content";

// Функция для получения страниц, исключая черновики и страницы с определенными ID
export const getSinglePage = async (collection: any) => {
  const allPage = await getCollection(collection);
  const removeDrafts = allPage
    .filter((data: any) => !data.data.draft)
    .sort(
      (a: any, b: any) => +new Date(b.data.pubDate) - +new Date(a.data.pubDate),
    );
  return removeDrafts;
};
