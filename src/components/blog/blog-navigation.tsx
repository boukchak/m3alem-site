"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogNavigationProps {
  previousPost?: {
    title: string;
    slug: string;
  } | null;
  nextPost?: {
    title: string;
    slug: string;
  } | null;
}

export function BlogNavigation({ previousPost, nextPost }: BlogNavigationProps) {
  if (!previousPost && !nextPost) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-12 pt-8 border-t border-gray-200"
    >
      <div className="flex justify-between items-center">
        {previousPost ? (
          <Link href={`/blog/${previousPost.slug}`} className="flex-1 mr-4">
            <Button variant="outline" className="w-full justify-start group">
              <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-gray-500 mb-1">Article précédent</div>
                <div className="font-medium line-clamp-1">{previousPost.title}</div>
              </div>
            </Button>
          </Link>
        ) : (
          <div className="flex-1 mr-4" />
        )}

        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="flex-1 ml-4">
            <Button variant="outline" className="w-full justify-end group">
              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">Article suivant</div>
                <div className="font-medium line-clamp-1">{nextPost.title}</div>
              </div>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        ) : (
          <div className="flex-1 ml-4" />
        )}
      </div>
    </motion.div>
  );
}

