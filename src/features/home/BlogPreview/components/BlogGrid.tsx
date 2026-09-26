import { ARTICLES } from "../constants";
import { BlogCard } from "./BlogCard";

export function BlogGrid() {
  return (
    <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {ARTICLES.map((article, index) => (
        <BlogCard key={article.id} article={article} index={index} />
      ))}
    </div>
  );
}
