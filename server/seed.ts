import { PrismaClient } from "./src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Create categories
  const categories = [
    { name: "Rackets" },
    { name: "Shuttlecocks" },
    { name: "Shoes" },
    { name: "Apparel" },
    { name: "Accessories" },
  ];

  console.log("📂 Creating categories...");
  for (const category of categories) {
    try {
      await prisma.categories.create({
        data: category,
      });
      console.log(`✅ Created category: ${category.name}`);
    } catch (error) {
      // If category already exists, skip it
      console.log(`Category "${category.name}" already exists, skipping...`);
    }
  }

  // Get category IDs
  const racketsCategory = await prisma.categories.findUnique({
    where: { name: "Rackets" },
  });
  const shuttlecocksCategory = await prisma.categories.findUnique({
    where: { name: "Shuttlecocks" },
  });
  const shoesCategory = await prisma.categories.findUnique({
    where: { name: "Shoes" },
  });
  const apparelCategory = await prisma.categories.findUnique({
    where: { name: "Apparel" },
  });
  const accessoriesCategory = await prisma.categories.findUnique({
    where: { name: "Accessories" },
  });

  // Create products
  const products = [
    {
      name: "Yonex Voltric Z-Force II",
      description:
        "Professional badminton racket with tri-voltage system for explosive power",
      price: 299.99,
      image_url:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      stock: 15,
      category_id: racketsCategory?.id,
    },
    {
      name: "Victor Auraspeed 90K",
      description: "Lightweight racket designed for speed and control",
      price: 249.99,
      image_url:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      stock: 12,
      category_id: racketsCategory?.id,
    },
    {
      name: "Li-Ning Woods N90-III",
      description: "Professional racket with excellent balance and power",
      price: 279.99,
      image_url:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      stock: 8,
      category_id: racketsCategory?.id,
    },
    {
      name: "Yonex Aerosensa 50",
      description: "Tournament grade shuttlecocks for professional play",
      price: 45.99,
      image_url:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      stock: 50,
      category_id: shuttlecocksCategory?.id,
    },
    {
      name: "Victor Master Ace",
      description: "High-quality shuttlecocks for competitive play",
      price: 39.99,
      image_url:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      stock: 35,
      category_id: shuttlecocksCategory?.id,
    },
    {
      name: "Yonex Power Cushion 65 Z3",
      description: "Professional badminton shoes with excellent cushioning",
      price: 129.99,
      image_url:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      stock: 20,
      category_id: shoesCategory?.id,
    },
    {
      name: "Victor A922 Ace",
      description: "Lightweight badminton shoes for speed and agility",
      price: 109.99,
      image_url:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      stock: 18,
      category_id: shoesCategory?.id,
    },
    {
      name: "Yonex Men's Tournament Jersey",
      description:
        "Professional tournament jersey with moisture-wicking technology",
      price: 79.99,
      image_url:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      stock: 25,
      category_id: apparelCategory?.id,
    },
    {
      name: "Victor Women's Competition Skirt",
      description: "Comfortable competition skirt with built-in shorts",
      price: 69.99,
      image_url:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      stock: 22,
      category_id: apparelCategory?.id,
    },
    {
      name: "Yonex Pro Grip Towel",
      description: "High-quality grip towel for maintaining racket handle",
      price: 19.99,
      image_url:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      stock: 40,
      category_id: accessoriesCategory?.id,
    },
    {
      name: "Victor Racket Cover",
      description: "Protective cover for badminton rackets",
      price: 24.99,
      image_url:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      stock: 30,
      category_id: accessoriesCategory?.id,
    },
  ];

  console.log("🏸 Creating products...");
  for (const product of products) {
    try {
      await prisma.products.create({
        data: product,
      });
      console.log(`✅ Created product: ${product.name}`);
    } catch (error) {
      // If product already exists, skip it
      console.log(`Product "${product.name}" already exists, skipping...`);
    }
  }

  // Create sample orders for revenue dashboard
  const sampleOrders = [
    {
      total_price: 299.99,
      status: "paid" as const,
      created_at: new Date("2024-01-15"),
      order_items: [
        {
          quantity: 1,
          unit_price: 299.99,
        },
      ],
    },
    {
      total_price: 175.98,
      status: "paid" as const,
      created_at: new Date("2024-01-20"),
      order_items: [
        {
          quantity: 1,
          unit_price: 129.99,
        },
        {
          quantity: 1,
          unit_price: 45.99,
        },
      ],
    },
    {
      total_price: 89.98,
      status: "shipped" as const,
      created_at: new Date("2024-02-05"),
      order_items: [
        {
          quantity: 1,
          unit_price: 69.99,
        },
        {
          quantity: 1,
          unit_price: 19.99,
        },
      ],
    },
    {
      total_price: 249.99,
      status: "paid" as const,
      created_at: new Date("2024-02-15"),
      order_items: [
        {
          quantity: 1,
          unit_price: 249.99,
        },
      ],
    },
    {
      total_price: 119.98,
      status: "paid" as const,
      created_at: new Date("2024-03-01"),
      order_items: [
        {
          quantity: 1,
          unit_price: 79.99,
        },
        {
          quantity: 1,
          unit_price: 39.99,
        },
      ],
    },
  ];

  console.log("📦 Creating sample orders...");
  for (const orderData of sampleOrders) {
    try {
      const order = await prisma.orders.create({
        data: {
          total_price: orderData.total_price,
          status: orderData.status,
          created_at: orderData.created_at,
        },
      });

      // Create order items (simplified - not linking to actual products for demo)
      for (const itemData of orderData.order_items) {
        await prisma.order_items.create({
          data: {
            order_id: order.id,
            quantity: itemData.quantity,
            unit_price: itemData.unit_price,
          },
        });
      }
      console.log(
        `✅ Created order: $${orderData.total_price} (${orderData.status})`
      );
    } catch (error) {
      console.log(`❌ Error creating order: ${error}`);
    }
  }

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
