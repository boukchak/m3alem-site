import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import { ShareButtons } from "@/components/blog/share-buttons";
import { RelatedArticles } from "@/components/blog/related-articles";
import { CommentsSection } from "@/components/blog/comments-section";
import { BlogNavigation } from "@/components/blog/blog-navigation";
import { ArticleHeader } from "@/components/blog/article-header";
import { ArticleMeta } from "@/components/blog/article-meta";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { Metadata } from "next";
import Image from "next/image";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(params: BlogPostPageProps["params"]) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image || "/blog/default.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image || "/blog/default.jpg"],
    },
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  // Articles similaires (même catégorie, excluant l'article actuel)
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Navigation précédent/suivant
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <ArticleHeader post={post} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="lg:flex lg:gap-12">
            {/* Contenu principal */}
            <article className="lg:flex-1">
              {/* Image de couverture */}
              {post.image && (
                <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Métadonnées de l'article */}
              <ArticleMeta post={post} />

              {/* Boutons de partage */}
              <div className="mb-8">
                <ShareButtons post={post} />
              </div>

              {/* Contenu de l'article */}
              <div className="prose prose-lg max-w-none">
                <Mdx code={post.body} />
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation précédent/suivant */}
              <BlogNavigation previousPost={previousPost} nextPost={nextPost} />

              {/* Section commentaires */}
              <CommentsSection postSlug={post.slug} />
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 mt-12 lg:mt-0">
              <div className="sticky top-24 space-y-8">
                {/* Table des matières */}
                <TableOfContents content={post.body.raw} />

                {/* Informations sur l'auteur */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    À propos de l'auteur
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {post.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-600">Expert M3alem</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    L'équipe M3alem partage ses conseils d'experts pour vous aider 
                    dans tous vos projets de rénovation et de réparation.
                  </p>
                </div>

                {/* Newsletter */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Newsletter
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Recevez nos derniers conseils et actualités directement dans votre boîte mail.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                      S'abonner
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Articles similaires */}
      {relatedPosts.length > 0 && (
        <RelatedArticles posts={relatedPosts} currentCategory={post.category} />
      )}
    </div>
  );
}

