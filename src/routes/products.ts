import { Hono } from "hono";
import { products } from "../data/products.js";

const app = new Hono();

/**
 * Get all products or filter by category
 * @param c - The context object
 * @returns A JSON response with the products
 * @example
 * GET /api/products
 * GET /api/products?category=accessories
 */
app.get("/", (c) => {
  const category = c.req.query("category");

  if (category) {
    const filtered = products.filter((p) => p.category === category);
    return c.json(filtered);
  }

  return c.json(products);
});

/**
 * Get a product by ID
 * @param c - The context object
 * @returns A JSON response with the product
 * @example
 * GET /api/products/stickers
 */
app.get("/:id", (c) => {
  const { id } = c.req.param();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return c.notFound();
  }

  return c.json(product);
});

export default app;
