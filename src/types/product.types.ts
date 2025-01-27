export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
  id: number;
  title: string;
  srcUrl: string;
  gallery?: string[];
price: number;
  type: string;
  discount: Discount;
  rating: number;
};

export type NestedContent = {
  id: string | number;
  content: Product[]; // Array of products within the nested content
};

export type ProductData = Product | NestedContent;
