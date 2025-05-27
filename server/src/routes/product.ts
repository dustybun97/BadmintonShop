// src/routes/product.ts
import { FastifyInstance } from "fastify";
import prisma from "../prisma";

export async function productRoutes(server: FastifyInstance) {
  server.get("/products", async (request, reply) => {
    try {
      const products = await prisma.products.findMany();
      return products;
    } catch (error) {
      server.log.error(error);
      return reply.status(500).send({ error: "Failed to fetch products" });
    }
  });
}
