// src/routes/product.ts
//ดึงคิวรีข้อมูลสินค้าจากฐานข้อมูลและส่งกลับเป็น JSON
// src/routes/product.ts

import { FastifyInstance } from "fastify";
import prisma from "../prisma";

export async function productRoutes(server: FastifyInstance) {
  server.get("/products", async (request, reply) => {
    try {
      const products = await prisma.products.findMany();

      // 🟢 แปลง price (string) → number
      const formattedProducts = products.map((product) => ({
        ...product,
        price: parseFloat(product.price as any), // Prisma Decimal → string → number
      }));

      return formattedProducts;
    } catch (error) {
      server.log.error(error);
      return reply.status(500).send({ error: "Failed to fetch products" });
    }
  });
}

