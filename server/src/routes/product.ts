// src/routes/product.ts
//ดึงคิวรีข้อมูลสินค้าจากฐานข้อมูลและส่งกลับเป็น JSON
// src/routes/product.ts

import { FastifyInstance } from "fastify";
import prisma from "../prisma";

export async function productRoutes(server: FastifyInstance) {
  server.get("/products", async (request, reply) => {
    try {
      // 🟢 ใช้ include เพื่อดึงข้อมูล category.name มาด้วย
      const products = await prisma.products.findMany({
        include: {
          category: {
            select: { name: true }, // ดึงแค่ name ของ category
          },
        },
      });

      // 🟢 แปลง price (string) → number
      const formattedProducts = products.map((product) => ({
        ...product,
        price: parseFloat(product.price as any),
        categoryName: product.category?.name || null, // เพิ่มชื่อ category ใน field categoryName
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
      let product;

      // ตรวจสอบรูปแบบว่าเป็นตัวเลขหรือ UUID
      if (/^\d+$/.test(id)) {
        // Numeric id
        product = await prisma.products.findUnique({
          where: { numeric_id: Number(id) },
          include: {
            category: {
              select: { name: true }, // ดึงแค่ name ของ category
            },
          },
        });
      } else if (
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test(
          id
        )
      ) {
        // UUID
        product = await prisma.products.findUnique({
          where: { id: id },
          include: {
            category: {
              select: { name: true }, // ดึงแค่ name ของ category
            },
          },
        });
      } else {
        return reply
          .status(400)
          .send({ error: "Invalid id format. Must be numeric id or uuid." });
      }

      if (!product) {
        return reply.status(404).send({ error: "Product not found" });
      }

      // แปลง price (Decimal) → number และเพิ่ม categoryName
      const formattedProduct = {
        ...product,
        price: parseFloat(product.price as any),
        categoryName: product.category?.name || null, // เพิ่มชื่อ category ใน field categoryName
      };

      return formattedProduct;
    } catch (error) {
      server.log.error(error);
      return reply.status(500).send({ error: "Internal server error" });
    }
  });
}
