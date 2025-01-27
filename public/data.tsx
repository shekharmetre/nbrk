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
          "/products/dehydrated-guava-powder.png"
        ],
        price: 120,
        type: "Fruits",
        discount: {
          amount: 12,
          percentage: 10
        },
        rating: 4.4
      },
      // Remaining newArrival data...
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
      // Remaining topSelling data...
    ],
    bestOffers: [
      {
        id: 22,
        title: "Zeera Powder",
        srcUrl: "/products/zeera-powder.png",
        gallery: [
          "/products/zeera-powder.png",
          "/products/zeera-powder.png",
          "/products/zeera-powder.png"
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
