import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type Category = {
  title: string;
  slug: string;
};

const categoriesData: Category[] = [
  {
    title: "Vegetables",
    slug: "/shop?category=t-vegetables",
  },
  {
    title: "Masalas",
    slug: "/shop?category=masalas",
  },
  {
    title: "Fruits",
    slug: "/shop?category=fruits",
  },
  {
    title: "Dehydrated",
    slug: "/shop?category=dehydrated",
  },
  {
    title: "Spices",
    slug: "/shop?category=spices",
  },
];

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      {categoriesData.map((category, idx) => (
        <Link
          key={idx}
          href={category.slug}
          className="flex items-center justify-between py-2"
        >
          {category.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  );
};

export default CategoriesSection;
