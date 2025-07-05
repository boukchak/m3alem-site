"use client";

import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar, Clock, User } from "lucide-react";

interface ArticleMetaProps {
  post: {
    author: string;
    date: string;
    readTime?: string;
  };
}

export function ArticleMeta({ post }: ArticleMetaProps) {
  return (
    <div className="flex flex-wrap items-center text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
      <div className="flex items-center mr-6 mb-2">
        <User className="w-4 h-4 mr-2" />
        <span>Par {post.author}</span>
      </div>
      
      <div className="flex items-center mr-6 mb-2">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{format(parseISO(post.date), "d MMMM yyyy", { locale: fr })}</span>
      </div>
      
      {post.readTime && (
        <div className="flex items-center mb-2">
          <Clock className="w-4 h-4 mr-2" />
          <span>{post.readTime} de lecture</span>
        </div>
      )}
    </div>
  );
}

