"use client";

import { blogConfig } from "../config/articles.config";
import { BlogCard } from "./BlogCard";

export function BlogGrid() {
  return (
    <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogConfig.articles.map((article, index) => (
        <BlogCard key={index} article={article} index={index} />
      ))}
    </div>
  );
}
