import { Product } from '../store/slices/productsSlice';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Samsung Galaxy S23 Ultra',
    description: 'Latest flagship smartphone with advanced camera system and S Pen functionality.',
    price: 124999,
    images: [
      'https://images.pexels.com/photos/15493878/pexels-photo-15493878.jpeg',
      'https://images.pexels.com/photos/30466750/pexels-photo-30466750.jpeg'
    ],
    category: 'Electronics',
    stock: 50,
    ratings: 4.5,
    numOfReviews: 128,
    reviews: [
      {
        id: '1',
        user: 'Rajesh Kumar',
        rating: 5,
        comment: 'Excellent phone with amazing camera quality!',
        date: '2024-01-15'
      }
    ]
  },
  {
    id: '2',
    name: 'Apple iPhone 15 Pro',
    description: 'Revolutionary iPhone with titanium design and pro camera system.',
    price: 134900,
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg'
    ],
    category: 'Electronics',
    stock: 30,
    ratings: 4.8,
    numOfReviews: 89,
    reviews: []
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Industry-leading noise canceling wireless headphones.',
    price: 29990,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg'
    ],
    category: 'Electronics',
    stock: 75,
    ratings: 4.6,
    numOfReviews: 156,
    reviews: []
  },
  {
    id: '4',
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with air cushioning technology.',
    price: 12995,
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
    ],
    category: 'Fashion',
    stock: 100,
    ratings: 4.3,
    numOfReviews: 203,
    reviews: []
  },
  {
    id: '5',
    name: 'Levi\'s 511 Slim Jeans',
    description: 'Classic slim-fit jeans for everyday wear.',
    price: 3999,
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg'
    ],
    category: 'Fashion',
    stock: 80,
    ratings: 4.2,
    numOfReviews: 167,
    reviews: []
  },
  {
    id: '6',
    name: 'Instant Pot Duo 7-in-1',
    description: 'Multi-functional pressure cooker for quick and easy cooking.',
    price: 8999,
    images: [
      'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg'
    ],
    category: 'Home & Kitchen',
    stock: 45,
    ratings: 4.7,
    numOfReviews: 312,
    reviews: []
  },
  {
    id: '7',
    name: 'Dyson V15 Detect Vacuum',
    description: 'Powerful cordless vacuum with laser dust detection.',
    price: 65900,
    images: [
      'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg'
    ],
    category: 'Home & Kitchen',
    stock: 25,
    ratings: 4.8,
    numOfReviews: 98,
    reviews: []
  },
  {
    id: '8',
    name: 'MacBook Air M2',
    description: 'Ultra-thin laptop with M2 chip for exceptional performance.',
    price: 114900,
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg'
    ],
    category: 'Electronics',
    stock: 20,
    ratings: 4.9,
    numOfReviews: 76,
    reviews: []
  },
  {
    id: '9',
    name: 'Adidas Ultraboost 22',
    description: 'Premium running shoes with responsive cushioning.',
    price: 16999,
    images: [
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg'
    ],
    category: 'Fashion',
    stock: 60,
    ratings: 4.4,
    numOfReviews: 189,
    reviews: []
  },
  {
    id: '10',
    name: 'Cotton Casual Shirt',
    description: 'Comfortable cotton shirt perfect for casual occasions.',
    price: 1999,
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg'
    ],
    category: 'Fashion',
    stock: 120,
    ratings: 4.1,
    numOfReviews: 145,
    reviews: []
  },
  {
    id: '11',
    name: 'KitchenAid Stand Mixer',
    description: 'Professional-grade stand mixer for baking enthusiasts.',
    price: 34999,
    images: [
      'https://images.pexels.com/photos/4226918/pexels-photo-4226918.jpeg'
    ],
    category: 'Home & Kitchen',
    stock: 35,
    ratings: 4.6,
    numOfReviews: 87,
    reviews: []
  },
  {
    id: '12',
    name: 'Samsung 65" QLED TV',
    description: '4K QLED smart TV with vibrant colors and smart features.',
    price: 89999,
    images: [
      'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg'
    ],
    category: 'Electronics',
    stock: 15,
    ratings: 4.5,
    numOfReviews: 67,
    reviews: []
  }
];

export const categories = [
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Books',
  'Sports',
  'Beauty',
  'Toys',
  'Automotive'
];

export const indianStates = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Delhi',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry'
];