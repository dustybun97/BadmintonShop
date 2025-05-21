import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Yonex Astrox 100 ZZ',
    description: 'The ASTROX 100 ZZ is a high-end racket designed for advanced players seeking power and precision. With its Rotational Generator System, it maximizes energy conversion for explosive smashes.',
    price: 219.99,
    category: 'rackets',
    images: [
      'https://images.pexels.com/photos/7299580/pexels-photo-7299580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7299572/pexels-photo-7299572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: true,
    stock: 15,
    rating: 4.8,
    reviewCount: 124,
    specifications: {
      weight: '83g',
      balance: 'Head Heavy',
      flexibility: 'Extra Stiff',
      material: 'Graphite, Nanometric, Tungsten',
      gripSize: 'G4',
    }
  },
  {
    id: '2',
    name: 'Li-Ning N7 II',
    description: 'The Li-Ning N7 II offers outstanding control and maneuverability. Its innovative frame design provides enhanced stability and reduced air resistance for faster swings.',
    price: 159.99,
    category: 'rackets',
    images: [
      'https://images.pexels.com/photos/13467636/pexels-photo-13467636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: false,
    stock: 8,
    rating: 4.5,
    reviewCount: 78,
    specifications: {
      weight: '85g',
      balance: 'Even Balance',
      flexibility: 'Medium Stiff',
      material: 'Carbon Fiber, Military Grade Steel',
      gripSize: 'G5',
    }
  },
  {
    id: '3',
    name: 'Yonex Aerus 3',
    description: 'The AERUS 3 is designed for high-speed movement with exceptional cushioning and comfort. Ultra-lightweight construction with Power Cushion+ technology for superior shock absorption.',
    price: 149.99,
    category: 'shoes',
    images: [
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: true,
    stock: 20,
    rating: 4.7,
    reviewCount: 93,
    specifications: {
      size: 'US 7-13',
      weight: 'Ultra Light (270g)',
      cushioning: 'Power Cushion+',
      outsole: 'Rounded-Sole',
      color: 'Blue/White',
    }
  },
  {
    id: '4',
    name: 'Yonex Nanoflare 800',
    description: 'The Nanoflare 800 is designed for fast attack play. The flexible shaft and head-light balance allow for quick movements and precise control during rapid exchanges.',
    price: 199.99,
    category: 'rackets',
    images: [
      'https://images.pexels.com/photos/2496756/pexels-photo-2496756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: true,
    stock: 12,
    rating: 4.6,
    reviewCount: 87,
    specifications: {
      weight: '80g',
      balance: 'Head Light',
      flexibility: 'Medium',
      material: 'Graphite, TORAYCA M40X, Super HMG',
      gripSize: 'G4',
    }
  },
  {
    id: '5',
    name: 'Victor A-Power 88',
    description: 'The Victor A-Power 88 is built for aggressive play with tremendous power. Its enhanced frame structure provides extra stability and minimizes frame distortion for accurate shots.',
    price: 189.99,
    category: 'rackets',
    images: [
      'https://images.pexels.com/photos/6256811/pexels-photo-6256811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: false,
    stock: 7,
    rating: 4.4,
    reviewCount: 65,
    specifications: {
      weight: '88g',
      balance: 'Head Heavy',
      flexibility: 'Stiff',
      material: 'High Tensile Modulus Graphite',
      gripSize: 'G5',
    }
  },
  {
    id: '6',
    name: 'Yonex Tournament Shuttlecocks (12-Pack)',
    description: 'Official tournament-grade feather shuttlecocks. These premium shuttles offer consistent flight performance, durability, and precise aerodynamics for competitive play.',
    price: 39.99,
    category: 'shuttlecocks',
    images: [
      'https://images.pexels.com/photos/115296/pexels-photo-115296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: true,
    stock: 50,
    rating: 4.9,
    reviewCount: 212,
    specifications: {
      type: 'Feather',
      speed: 'Medium',
      cork: 'Premium Natural Cork',
      feathers: '16 Premium Goose Feathers',
      quantity: '12 shuttlecocks per tube',
    }
  },
  {
    id: '7',
    name: 'Li-Ning Training Shuttlecocks (6-Pack)',
    description: 'Durable nylon shuttlecocks for practice and recreational play. These shuttles maintain consistent flight characteristics and withstand extensive use for training sessions.',
    price: 14.99,
    category: 'shuttlecocks',
    images: [
      'https://images.pexels.com/photos/6256800/pexels-photo-6256800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: false,
    stock: 100,
    rating: 4.3,
    reviewCount: 156,
    specifications: {
      type: 'Nylon',
      speed: 'Medium-Fast',
      cork: 'Synthetic Cork',
      durability: 'High',
      quantity: '6 shuttlecocks per tube',
    }
  },
  {
    id: '8',
    name: 'Victor Pro Badminton Bag',
    description: 'Spacious badminton bag with multiple compartments for rackets, shoes, apparel, and accessories. Features thermal insulation to protect equipment and comfortable carrying straps.',
    price: 79.99,
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/3490361/pexels-photo-3490361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: false,
    stock: 18,
    rating: 4.6,
    reviewCount: 72,
    specifications: {
      capacity: '6-8 Rackets',
      material: 'Durable Polyester',
      compartments: '3 Main Compartments',
      straps: 'Padded Backpack Straps',
      dimensions: '76 x 33 x 25 cm',
    }
  },
  {
    id: '9',
    name: 'Yonex Power Cushion 65 Z2',
    description: 'Professional badminton shoes with advanced Power Cushion technology for exceptional shock absorption and energy return. Enhanced grip and stability for quick lateral movements.',
    price: 129.99,
    category: 'shoes',
    images: [
      'https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: true,
    stock: 14,
    rating: 4.7,
    reviewCount: 108,
    specifications: {
      size: 'US 7-13',
      weight: 'Light (320g)',
      cushioning: 'Power Cushion',
      outsole: 'Hexagrip',
      color: 'Red/Black',
    }
  },
  {
    id: '10',
    name: 'Premium Badminton Grip Tape (3-Pack)',
    description: 'High-quality replacement grip tape with moisture-absorbing properties. Provides excellent traction and comfort for extended gameplay without slipping.',
    price: 12.99,
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/2097112/pexels-photo-2097112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: false,
    stock: 65,
    rating: 4.5,
    reviewCount: 97,
    specifications: {
      material: 'Microfiber PU',
      length: '110cm',
      width: '25mm',
      thickness: '1.8mm',
      quantity: '3 grips per pack',
    }
  },
  {
    id: '11',
    name: 'Victor Tournament T-Shirt',
    description: 'Lightweight, breathable competition t-shirt with moisture-wicking technology. Designed for maximum mobility and comfort during intense gameplay.',
    price: 34.99,
    category: 'apparel',
    images: [
      'https://images.pexels.com/photos/9896768/pexels-photo-9896768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: false,
    stock: 32,
    rating: 4.4,
    reviewCount: 83,
    specifications: {
      material: '100% Polyester',
      fit: 'Athletic',
      technology: 'Quick-Dry',
      size: 'XS-XXL',
      color: 'Blue',
    }
  },
  {
    id: '12',
    name: 'Yonex Women\'s Team Shorts',
    description: 'Professional badminton shorts with built-in compression shorts for support and coverage. Lightweight, stretchy fabric allows for unrestricted movement on the court.',
    price: 29.99,
    category: 'apparel',
    images: [
      'https://images.pexels.com/photos/9559841/pexels-photo-9559841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    featured: false,
    stock: 24,
    rating: 4.6,
    reviewCount: 67,
    specifications: {
      material: '88% Polyester, 12% Spandex',
      fit: 'Athletic',
      length: 'Mid-thigh',
      size: 'XS-XL',
      color: 'Black',
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};