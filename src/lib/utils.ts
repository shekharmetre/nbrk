
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

export const data = {
  products: {
    newArrival: [
      {
        id: 1,
        title: "Chicken Masala Powder",
        srcUrl: "/products/chicken-masala-powder-removebg-preview.png",
        gallery: [
          "/products/chicken-masala-powder.png",
          "/products/chicken-masala-powder.png",
          "/products/chicken-masala-powder.png"
        ],
        price: 150,
        type: "Masalas",
        discount: {
          amount: 15,
          percentage: 10
        },
        rating: 4.6
      },
      {
        id: 2,
        title: "Dehydrated Guava Powder",
        srcUrl: "/products/dehydrated-guava-powder.png",
        gallery: [
          "/products/dehydrated-guava-powder.png",
          "/products/dehydrated-guava-powder.png",
          "/products/dehydrated-guava-powder.png",
        ],
        price: 120,
        type: "Fruits",
        discount: {
          amount: 12,
          percentage: 10,
        },
        rating: 4.4,
      },
      {
        id: 3,
        title: "Dehydrated Lemon Powder",
        srcUrl: "/products/dehydrated-lemon-powder.png",
        gallery: [
          "/products/dehydrated-lemon-powder.png",
          "/products/dehydrated-lemon-powder.png",
          "/products/dehydrated-lemon-powder.png",
        ],
        price: 450,
        type: "Vegetables",
        discount: {
          amount: 26,
          percentage: 20,
        },
        rating: 4.7,
      },
      {
        id: 4,
        title: "Dehydrated Papaya Powder",
        srcUrl: "/products/dehydrated-papaya-powder.png",
        gallery: [
          "/products/dehydrated-papaya-powder.png",
          "/products/dehydrated-papaya-powder.png",
          "/products/dehydrated-papaya-powder.png",
        ],
        price: 350,
        type: "Fruits",
        discount: {
          amount: 14,
          percentage: 10,
        },
        rating: 4.5,
      },
      {
        id: 5,
        title: "Dehydrated Yellow Banana Powder",
        srcUrl: "/products/dehydrated-yellow-banana-powder.png",
        gallery: [
          "/products/dehydrated-yellow-banana-powder.png",
          "/products/dehydrated-yellow-banana-powder.png",
          "/products/dehydrated-yellow-banana-powder.png",
        ],
        price: 110,
        type: "Fruits",
        discount: {
          amount: 11,
          percentage: 10,
        },
        rating: 4.3,
      },
      {
        id: 6,
        title: "Dhanya Powder",
        srcUrl: "/products/dhanya-powder.png",
        gallery: [
          "/products/dhanya-powder.png",
          "/products/dhanya-powder.png",
          "/products/dhanya-powder.png",
        ],
        price: 130,
        type: "Spices",
        discount: {
          amount: 18,
          percentage: 20,
        },
        rating: 4.4,
      },
      {
        id: 7,
        title: "Dried Banana Peel Powder",
        srcUrl: "/products/dried-banana-peel-powder.png",
        gallery: [
          "/products/dried-banana-peel-powder.png",
          "/products/dried-banana-peel-powder.png",
          "/products/dried-banana-peel-powder.png",
        ],
        price: 80,
        type: "Fruits",
        discount: {
          amount: 8,
          percentage: 10,
        },
        rating: 4.2,
      },
      {
        id: 8,
        title: "Green Banana Powder",
        srcUrl: "/products/green-banana-powder.png",
        gallery: [
          "/products/green-banana-powder.png",
          "/products/green-banana-powder.png",
          "/products/green-banana-powder.png",
        ],
        price: 350,
        type: "Fruits",
        discount: {
          amount: 20,
          percentage: 20,
        },
        rating: 4.5,
      },
      {
        id: 9,
        title: "Green Chilli Powder",
        srcUrl: "/products/green-chilli-powder.png",
        gallery: [
          "/products/green-chilli-powder.png",
          "/products/green-chilli-powder.png",
          "/products/green-chilli-powder.png",
        ],
        price: 350,
        type: "Vegetables",
        discount: {
          amount: 7,
          percentage: 10,
        },
        rating: 4.1,
      },
      {
        id: 10,
        title: "Green Papaya Powder",
        srcUrl: "/products/green-papaya-powder.png",
        gallery: [
          "/products/green-papaya-powder.png",
          "/products/green-papaya-powder.png",
          "/products/green-papaya-powder.png",
        ],
        price: 95,
        type: "Vegetables",
        discount: {
          amount: 9,
          percentage: 10,
        },
        rating: 4.3,
      },
    ],
    topSelling: [
      {
        id: 10,
        title: "Green Papaya Powder",
        srcUrl: "/products/green-papaya-powder.png",
        gallery: [
          "/products/green-papaya-powder.png",
          "/products/green-papaya-powder.png",
          "/products/green-papaya-powder.png"
        ],
        price: 95,
        type: "Vegetables",
        discount: {
          amount: 9,
          percentage: 10
        },
        rating: 4.3
      },
      {
        id: 11,
        title: "Guava Fruit Powder",
        srcUrl: "/products/guava-fruit-powder.png",
        gallery: [
          "/products/guava-fruit-powder.png",
          "/products/guava-fruit-powder.png",
          "/products/guava-fruit-powder.png"
        ],
        price: 380,
        type: "Fruits",
        discount: {
          amount: 21,
          percentage: 20
        },
        rating: 4.6
      },
      {
        id: 12,
        title: "Idli Karam",
        srcUrl: "/products/idli-karam.png",
        gallery: [
          "/products/idli-karam.png",
          "/products/idli-karam.png",
          "/products/idli-karam.png"
        ],
        price: 75,
        type: "Masalas",
        discount: {
          amount: 7,
          percentage: 10
        },
        rating: 4.4
      },
      {
        id: 13,
        title: "Lemon Peel Powder",
        srcUrl: "/products/lemon-peel-powder.png",
        gallery: [
          "/products/lemon-peel-powder.png",
          "/products/lemon-peel-powder.png",
          "/products/lemon-peel-powder.png"
        ],
        price: 85,
        type: "Vegetables",
        discount: {
          amount: 17,
          percentage: 20
        },
        rating: 4.5
      },
      {
        id: 14,
        title: "Mango Fruit Powder",
        srcUrl: "/products/mango-fruit.png",
        gallery: [
          "/products/mango-fruit.png",
          "/products/mango-fruit.png",
          "/products/mango-fruit.png"
        ],
        price: 125,
        type: "Fruits",
        discount: {
          amount: 12,
          percentage: 10
        },
        rating: 4.7
      },
      {
        id: 15,
        title: "Organic Amla Powder",
        srcUrl: "/products/Organic-amla-powder.png",
        gallery: [
          "/products/Organic-amla-powder.png",
          "/products/Organic-amla-powder.png",
          "/products/Organic-amla-powder.png"
        ],
        price: 115,
        type: "Fruits",
        discount: {
          amount: 23,
          percentage: 20
        },
        rating: 4.5
      },
      {
        id: 16,
        title: "Papaya Fruit Powder",
        srcUrl: "/products/papaya-fruit-powder.png",
        gallery: [
          "/products/papaya-fruit-powder.png",
          "/products/papaya-fruit-powder.png",
          "/products/papaya-fruit-powder.png"
        ],
        price: 135,
        type: "Fruits",
        discount: {
          amount: 27,
          percentage: 20
        },
        rating: 4.6
      },
      {
        id: 17,
        title: "Pineapple Fruit Powder",
        srcUrl: "/products/pineapple-fruit-powder.png",
        gallery: [
          "/products/pineapple-fruit-powder.png",
          "/products/pineapple-fruit-powder.png",
          "/products/pineapple-fruit-powder.png"
        ],
        price: 480,
        type: "Fruits",
        discount: {
          amount: 14,
          percentage: 10
        },
        rating: 4.5
      },
      {
        id: 18,
        title: "Raw Papaya Powder",
        srcUrl: "/products/raw-papaya-powder.png",
        gallery: [
          "/products/raw-papaya-powder.png",
          "/products/raw-papaya-powder.png",
          "/products/raw-papaya-powder.png"
        ],
        price: 100,
        type: "Vegetables",
        discount: {
          amount: 10,
          percentage: 10
        },
        rating: 4.4
      },
      {
        id: 19,
        title: "Red Onion Powder",
        srcUrl: "/products/red-onion-powder.png",
        gallery: [
          "/products/red-onion-powder.png",
          "/products/red-onion-powder.png",
          "/products/red-onion-powder.png"
        ],
        price: 350,
        type: "Vegetables",
        discount: {
          amount: 18,
          percentage: 20
        },
        rating: 4.3
      },
      {
        id: 20,
        title: "Spray Dried Cucumber Powder",
        srcUrl: "/products/spray-dried-cucumber-powder.png",
        gallery: [
          "/products/spray-dried-cucumber-powder.png",
          "/products/spray-dried-cucumber-powder.png",
          "/products/spray-dried-cucumber-powder.png"
        ],
        price: 110,
        type: "Vegetables",
        discount: {
          amount: 11,
          percentage: 10
        },
        rating: 4.6
      },
      {
        id: 21,
        title: "Spray Dried Tomato Powder",
        srcUrl: "/products/spray-dried-totmato.png",
        gallery: [
          "/products/spray-dried-totmato.png",
          "/products/spray-dried-tomato.png",
          "/products/spray-dried-tomato.png"
        ],
        price: 380,
        type: "Vegetables",
        discount: {
          amount: 19,
          percentage: 20
        },
        rating: 4.5
      },
      {
        id: 22,
        title: "Zeera Powder",
        srcUrl: "/products/zerra-powder.png",
        gallery: [
          "/products/zerra-powder.png",
          "/products/zerra-powder.png",
          "/products/zerra-powder.png"
        ],
        price: 480,
        type: "Spices",
        discount: {
          amount: 8,
          percentage: 10
        },
        rating: 4.2
      }
    ],
    bestOffers: [
      {
        id: 22,
        title: "Zeera Powder",
        srcUrl: "/products/zerra-powder.png",
        gallery: [
          "/products/zerra-powder.png",
          "/products/zerra-powder.png",
          "/products/zerra-powder.png"
        ],
        price: 480,
        type: "Spices",
        discount: {
          amount: 8,
          percentage: 10
        },
        rating: 4.2
      },
      // Remaining bestOffers data...
    ]
  }
};
