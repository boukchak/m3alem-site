import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'Le titre de l\'article',
      required: true,
    },
    date: {
      type: 'date',
      description: 'La date de publication de l\'article',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Une courte description de l\'article',
      required: true,
    },
    image: {
      type: 'string',
      description: 'L\'image de couverture de l\'article',
      required: false,
    },
    category: {
      type: 'enum',
      options: ['plomberie', 'electricite', 'peinture', 'jardinage', 'diy', 'actu-maison'],
      description: 'La catégorie de l\'article',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Les tags de l\'article',
      required: false,
    },
    author: {
      type: 'string',
      description: 'L\'auteur de l\'article',
      required: true,
    },
    readingTime: {
      type: 'number',
      description: 'Le temps de lecture estimé en minutes',
      required: false,
    },
    featured: {
      type: 'boolean',
      description: 'Article mis en avant',
      required: false,
      default: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

