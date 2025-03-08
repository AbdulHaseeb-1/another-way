import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

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
    <article className="bg-secondary rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl max-w-md">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-4 left-4 bg-blue-600  px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </span>
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-bold  mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          {title}
        </h2>
        
        <p className=" mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-sm mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{readTime}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full  flex items-center justify-center">
            <User size={16} className="" />
          </div>
          <span className="text-sm font-medium ">{author}</span>
        </div>
      </div>
    </article>
  );
}