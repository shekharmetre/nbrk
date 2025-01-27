import { data } from "@/app/page";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const compareArrays = (a: any[], b: any[]) => {
  return a.toString() === b.toString();
};


export function findProductById(id: number) {
  const categories = Object.values(data.products); // Extract all categories
  for (const category of categories) {
    const product = category.find((item) => item.id === id); // Search in each category
    if (product) {
      return product; // Return the product if found
    }
  }
  return null; // Return null if no product is found
}
