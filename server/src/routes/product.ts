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

  server.get("/products/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    try {
      // Prisma: หา product ตาม id
      const product = await prisma.products.findUnique({
        where: { numeric_id: Number(id) },
      });

      if (!product) {
        return reply.status(404).send({ error: "Product not found" });
      }

      // ✅ แปลง price เป็น number
      const formattedProduct = {
        ...product,
        price: parseFloat(product.price as any),
      };

      return formattedProduct;
    } catch (error) {
      server.log.error(error);
      return reply.status(500).send({ error: error });
    }
  });
}
