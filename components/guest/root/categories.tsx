import React from "react";

interface Category {
  title: string;
}

const categories: Category[] = [
  { title: "Programming" },
  { title: "Health" },
  { title: "News" },
  { title: "Economics" },
  { title: "Business" },
];

export default function Categories() {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      {categories.map((category: Category) => {
        return <div className="  p-2 px-5 rounded-full  shadow bg-secondary ">{category.title}</div>;
      })}
    </div>
  );
}
