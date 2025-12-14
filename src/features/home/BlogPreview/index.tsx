"use client";

import { BlogBackground, BlogHeader, BlogGrid } from "./components";

export default function BlogPreview() {
  return (
    <section
      className="py-5 sm:py-20 md:py-24 bg-black relative overflow-hidden"
      aria-labelledby="blog-heading"
    >
      <BlogBackground />
      <div className="container mx-auto px-4 relative z-10">
        <BlogHeader />
        <BlogGrid />
      </div>
    </section>
  );
}
