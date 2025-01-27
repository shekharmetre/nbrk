import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import DressStyle from "@/components/homepage/DressStyle";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Category } from "@/lib/category";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { Product, ProductData } from "@/types/product.types";
import { Review } from "@/types/review.types";
// Fruits,Vegetables,Masalas,Spices








export const relatedProductData: Product[] = [
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
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alex K.",
    content:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
    rating: 5,
    date: "August 14, 2023",
  },
  {
    id: 2,
    user: "Sarah M.",
    content: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    rating: 5,
    date: "August 15, 2023",
  },
  {
    id: 3,
    user: "Ethan R.",
    content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
    rating: 5,
    date: "August 16, 2023",
  },
  {
    id: 4,
    user: "Olivia P.",
    content: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
    rating: 5,
    date: "August 17, 2023",
  },
  {
    id: 5,
    user: "Liam K.",
    content: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
    rating: 5,
    date: "August 18, 2023",
  },
  {
    id: 6,
    user: "Samantha D.",
    content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
    rating: 5,
    date: "August 19, 2023",
  },
];

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


export default async function Home() {
    const newArrival = data.products.newArrival
    const topSelling = data.products.topSelling
  return (
    <>
      <Header />
      {/* <Brands /> */}
      <div className="md:hidden block mt-5">
        <h1 className={cn([
          integralCF.className,
          "text-md md:text-5xl mb-4 capitalize",
        ])}>Category:</h1>
          <Category />
      </div>
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NEW ARRIVALS"
          data={newArrival}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="top selling"
            data={topSelling}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
