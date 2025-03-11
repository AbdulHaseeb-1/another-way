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
    <div className="mt-20 flex flex-row flex-wrap gap-3 ">
      {categories.map((category: Category,index:number) => {
        return <div key={index} className="  p-2 px-5 rounded-full  shadow bg-secondary ">{category.title}</div>;
      })}
    </div>
  );
}
