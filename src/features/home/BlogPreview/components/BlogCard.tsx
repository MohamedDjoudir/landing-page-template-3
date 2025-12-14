"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Article {
  image: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

interface BlogCardProps {
  article: Article;
  index: number;
}

export function BlogCard({ article, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full flex flex-col hover:border-white/20 transition-all">
        <BlogCardImage
          image={article.image}
          title={article.title}
          category={article.category}
        />
        <BlogCardContent article={article} />
      </div>
    </motion.div>
  );
}

function BlogCardImage({
  image,
  title,
  category,
}: {
  image: string;
  title: string;
  category: string;
}) {
  return (
    <div className="relative h-44 sm:h-48 overflow-hidden">
      <Image
        src={image}
        alt={`Featured image for article: ${title}`}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div
        className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-full"
        aria-label={`Category: ${category}`}
      >
        {category}
      </div>
    </div>
  );
}

function BlogCardContent({ article }: { article: Article }) {
  return (
    <div className="p-4 sm:p-5 flex-1 flex flex-col">
      <div className="flex items-center gap-3 text-white/60 text-xs sm:text-sm mb-2 sm:mb-3 flex-wrap">
        <div
          className="flex items-center gap-1"
          aria-label={`Published date: ${article.date}`}
        >
          <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
          <span>{article.date}</span>
        </div>
        <div
          className="flex items-center gap-1"
          aria-label={`Reading time: ${article.readTime}`}
        >
          <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
          <span>{article.readTime}</span>
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2">
        {article.title}
      </h3>
      <p className="text-white/70 text-sm sm:text-base mb-4 flex-1 line-clamp-3">
        {article.excerpt}
      </p>

      <Button
        variant="link"
        className="p-0 text-amber-400 hover:text-amber-300 justify-start text-sm sm:text-base focus:ring-2 focus:ring-amber-400 focus:outline-none"
        aria-label={`Read more about ${article.title}`}
      >
        Read More
        <ArrowRight
          className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4"
          aria-hidden="true"
        />
      </Button>
    </div>
  );
}
