import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import productsRouter from "./routes/products.js";

const app = new Hono();

app.use("/images/*", serveStatic({ root: "./public" }));

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const api = new Hono().basePath("/api");

api.route("/products", productsRouter);

app.route("/", api);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
