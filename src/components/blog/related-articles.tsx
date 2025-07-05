"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RelatedArticlesProps {
  posts: Array<{
    title: string;
    excerpt: string;
    slug: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image?: string;
  }>;
  currentCategory: string;
}

export function RelatedArticles({ posts, currentCategory }: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Articles similaires
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez d'autres articles dans la catégorie <strong>{currentCategory}</strong> 
            qui pourraient vous intéresser.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/blog/default.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2 flex-grow text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-xs text-gray-500 mb-4 space-x-3">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {format(parseISO(post.date), "d MMM yyyy", { locale: fr })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                    >
                      Lire l'article
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Lien vers tous les articles de la catégorie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href={`/blog?category=${encodeURIComponent(currentCategory)}`}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Voir tous les articles {currentCategory}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

