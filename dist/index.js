import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { products } from "./data/products.js";
const app = new Hono();
app.use("/images/*", serveStatic({ root: "./public" }));
app.get("/products", (c) => {
    const category = c.req.query("category");
    if (category) {
        const filtered = products.filter((p) => p.category === category);
        return c.json(filtered);
    }
    return c.json(products);
});
app.get("/products/:id", (c) => {
    const { id } = c.req.param();
    const product = products.find((p) => p.id === id);
    if (!product) {
        return c.notFound();
    }
    return c.json(product);
});
app.get("/", (c) => {
    return c.text("Hello Hono!");
});
serve({
    fetch: app.fetch,
    port: 3000,
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});
