import { ArrowRightIcon, Flame, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { describe } from "node:test";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default async function Categories() {
  const categories = [
    {
      id: 1,
      title: "Programming",
      description: "Nothing",
      imageUrl: "/images/p.png",
      isFeatured: true,
      likes: 0,
    },
    {
      id: 1,
      title: "Programming",
      description: "Nothing",
      imageUrl: "/images/placeholder.png",
      isFeatured: true,
      likes: 0,
    },
  ];

  return (
    <div className="relative overflow-hidden py-20 ">
      <div className="container p-0 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <Badge variant="outline" className="w-fit mx-auto">
              Categories
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Explore various fields
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore the amazing collection of categories
            </p>
          </div>
        </div>

        {categories.length == 0 ? (
          <div className="grid  md:text-xl  ">
            <div className="flex flex-col  justify-between gap-8 mb-2">
              <div className="h-40 grid place-content-center font-bold">
                <p>
                  Something is preventing good categories to reach you,{" "}
                  <Link href={"#"} className="underline">
                    Report
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {categories.map((category) => (
              <Link
                href={`/categories/${category.title}`}
                key={category.id}
                className="category-card h-34 md:h-48 group relative overflow-hidden rounded-2xl card-shadow"
              >
                <div className="category-image-wrapper relative h-full w-full overflow-hidden">
                  <Image
                    src={category.imageUrl || "/placeholder.jpg"} // Fallback in case of missing image
                    alt={category.title || "Category Image"}
                    className="category-image w-full h-full object-cover  "
                    width={500}
                    height={500}
                    priority={false} // Ensures lazy loading
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-90"></div>
                </div>

                {category.isFeatured && (
                  <div className="absolute top-2 right-2 z-10 text-amber-500">
                    <Flame />
                  </div>
                )}

                <div className="category-content absolute inset-0 flex flex-col justify-end p-4 md:py-8 text-white">
                  <div className="transform md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-base md:text-xl font-bold md:mb-1 capitalize">
                      {category.title}
                    </h3>
                    {/* <p className="text-xs text-neutral-300 md:mb-1">
                      {category.description}
                    </p> */}

                    <div className="hidden md:flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 fill-current text-red-400" />
                        <span className="text-sm font-medium">
                          {category.likes ?? 0}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Uncomment to show View All button */}
        {/* <div className="text-center mt-10">
          <Button
            size="sm"
            className="hover-lift text-white font-semibold transition-all duration-300 inline-flex items-center gap-3 group shadow-xl"
          >
            View All Categories
            <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Button>
        </div> */}
      </div>
    </div>
  );
}
