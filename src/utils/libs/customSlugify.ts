import { slug } from "github-slugger";
import slugify from "slugify";

export const customSlugify = (content) => {
  if (!content) return null;

  // Проверка, содержит ли строка русские символы
  const isRussian = /[а-яА-ЯЁё]/.test(content);

  if (isRussian) {
    // Используем slugify для русских символов
    return slugify(content, { lower: true, strict: true, locale: "ru" });
  } else {
    // Используем стандартный slug для английских символов
    return slug(content);
  }
};

