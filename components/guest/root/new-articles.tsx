import React from "react";
import { BlogCard } from "@/components/ui/blog-card";

export default function NewArticles() {
  const sampleBlog = [
    {
      title: "The Future of Web Development: What's Next in 2025",
      excerpt:
        "Explore the latest trends and technologies shaping the future of web development. From AI-powered tools to new frameworks, discover what's on the horizon.",
      author: "Sarah Johnson",
      date: "Mar 15, 2025",
      readTime: "5 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      category: "Technology",
    },
    {
      title: "The Future of Web Development: What's Next in 2025",
      excerpt:
        "Explore the latest trends and technologies shaping the future of web development. From AI-powered tools to new frameworks, discover what's on the horizon.",
      author: "Sarah Johnson",
      date: "Mar 15, 2025",
      readTime: "5 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      category: "Technology",
    },
    {
      title: "The Future of Web Development: What's Next in 2025",
      excerpt:
        "Explore the latest trends and technologies shaping the future of web development. From AI-powered tools to new frameworks, discover what's on the horizon.",
      author: "Sarah Johnson",
      date: "Mar 15, 2025",
      readTime: "5 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      category: "Technology",
    },
    {
      title: "The Future of Web Development: What's Next in 2025",
      excerpt:
        "Explore the latest trends and technologies shaping the future of web development. From AI-powered tools to new frameworks, discover what's on the horizon.",
      author: "Sarah Johnson",
      date: "Mar 15, 2025",
      readTime: "5 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      category: "Technology",
    },
    {
      title: "The Future of Web Development: What's Next in 2025",
      excerpt:
        "Explore the latest trends and technologies shaping the future of web development. From AI-powered tools to new frameworks, discover what's on the horizon.",
      author: "Sarah Johnson",
      date: "Mar 15, 2025",
      readTime: "5 min read",
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      category: "Technology",
    },
  ];

  return (
    <div>
      <div className="text-2xl lg:text-4xl font-bold">Recent Articles</div>
      <div className=" my-6 grid md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center">
        {sampleBlog.map((b, i) => (
          <div key={i}>
            <BlogCard {...b} />
          </div>
        ))}
      </div>
    </div>
  );
}
