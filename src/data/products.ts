export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "stickers",
    name: "Stickers",
    price: 1000,
    description: "This is the stickers product",
    image: "/images/sticker.png",
    category: "accessories",
  },
  {
    id: "hoodies",
    name: "Hoodies",
    price: 2000,
    description: "This is the hoodies product",
    image: "/images/hoodie.png",
    category: "apparel",
  },
  {
    id: "mugs",
    name: "Mugs",
    price: 1500,
    description: "This is the mugs product",
    image: "/images/mug.png",
    category: "accessories",
  },
  {
    id: "t-shirts",
    name: "T-Shirts",
    price: 1000,
    description: "This is the t-shirts product",
    image: "/images/t-shirt.png",
    category: "apparel",
  },
];
