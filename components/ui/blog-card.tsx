import React from "react";
import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
}

export function BlogCard({
  title,
  excerpt,
  author,
  date,
  readTime,
  imageUrl,
  category,
}: BlogCardProps) {
  return (
    <article className="relative bg-secondary  rounded-xl overflow-hidden shadow transition-all duration-300 hover:shadow-xl ">
      <div className="">
        {/* <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover absolute -z-10"
        /> */}
      </div>

      <div className="p-4">
        <Link href={"/article/slug"}>
          <h2 className="text-base md:text-xl font-bold  mb-2 line-clamp-2 hover:underline transition-colors">
            {title}
          </h2>
        </Link>

        <p className="text-sm mb-4 line-clamp-2">{excerpt}</p>

        <div className="flex items-center gap-4 text-sm mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Clock size={16} />
            <span>{readTime}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full  flex items-center justify-center">
              <User size={16} className="" />
            </div>
            <span className="text-sm font-medium ">{author}</span>
          </div>
          <span className=" bg-primary  text-primary-foreground  px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
    </article>
  );
}
