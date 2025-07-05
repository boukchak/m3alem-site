// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "Le titre de l'article",
      required: true
    },
    date: {
      type: "date",
      description: "La date de publication de l'article",
      required: true
    },
    description: {
      type: "string",
      description: "Une courte description de l'article",
      required: true
    },
    image: {
      type: "string",
      description: "L'image de couverture de l'article",
      required: false
    },
    category: {
      type: "enum",
      options: ["plomberie", "electricite", "peinture", "jardinage", "diy", "actu-maison"],
      description: "La cat\xE9gorie de l'article",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "Les tags de l'article",
      required: false
    },
    author: {
      type: "string",
      description: "L'auteur de l'article",
      required: true
    },
    readTime: {
      type: "string",
      description: 'Le temps de lecture estim\xE9 (ex: "5 min")',
      required: true
    },
    excerpt: {
      type: "string",
      description: "Un extrait de l'article pour les aper\xE7us",
      required: true
    },
    readingTime: {
      type: "number",
      description: "Le temps de lecture estim\xE9 en minutes",
      required: false
    },
    featured: {
      type: "boolean",
      description: "Article mis en avant",
      required: false,
      default: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-KWFMSAOC.mjs.map
