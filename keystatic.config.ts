import { collection, config, fields } from "@keystatic/core";

const isProd = import.meta.env.PROD;

export default config({
  storage: isProd
    ? {
        kind: "github",
        repo: {
          owner: "",
          name: "",
        },
      }
    : { kind: "local" },
  ui: {
    brand: {
      name: "12 шагов - находки",
    },
  },
  collections: {
    posts: collection({
      label: "Посты",
      slugField: "title",
      path: "src/content/posts/*",
      entryLayout: "content",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Заголовок", validation: { length: { min: 3 } } },
        }),
        content: fields.document({
          label: "Контент",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        pubDate: fields.date({
          label: "Дата публикации",
        }),
        description: fields.text({
          label: "Описание",
          multiline: true,
        }),
        tags: fields.array(
          fields.relationship({
            label: "Тег",
            collection: "tags",
          }),
          {
            label: "Теги",
            itemLabel: (props) => props.value ?? "Выберите тег(-и)",
            validation: { length: { min: 1 } },
          },
        ),
        // image: fields.image({
        //   label: "Изображение к посту",
        //   directory: "src/assets/images/posts",
        //   publicPath: "../../assets/images/posts",
        // }),
        audioFile: fields.file({
          label: "Аудио файл",
          directory: "public/audio",
          publicPath: "/public/audio/",
        }),
        speechVoice: fields.checkbox({
          label: "Озвученный?",
          defaultValue: false,
        }),
        draft: fields.checkbox({
          label: "Черновик",
          defaultValue: false,
          description:
          "Установите этот пост как черновик, чтобы предотвратить его публикацию.",
        }),
        image: fields.empty(),
      },
    }),
    tags: collection({
      label: "Теги к постам",
      path: "src/content/tags/*",
      slugField: "name",
      format: {
        data: "yaml",
        contentField: "markdoc",
      },
      schema: {
        markdoc: fields.emptyDocument(),
        name: fields.text({ label: "Имя тега" }),
      },
    }),
  },
});
