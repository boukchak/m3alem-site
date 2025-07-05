"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ArticleHeaderProps {
  post: {
    title: string;
    category: string;
    excerpt: string;
  };
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Badge className="bg-blue-600 text-white mb-6">
            {post.category}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

