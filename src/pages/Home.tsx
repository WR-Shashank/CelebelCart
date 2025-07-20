import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Truck, Shield, Headphones, Zap } from 'lucide-react';
import { RootState } from '../store/store';
import { setProducts } from '../store/slices/productsSlice';
import { mockProducts } from '../data/mockData';
import ProductCard from '../components/Product/ProductCard';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to CelebelCart
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              India's Trusted Online Shopping Destination
            </p>
            <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
              Discover amazing products at unbeatable prices. Fast delivery across India with secure payments.
            </p>
            <Link
              to="/products"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
              <Truck className="h-8 w-8 text-orange-600 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Free delivery on orders above ₹499 across India</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <Shield className="h-8 w-8 text-green-600 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">100% secure payments with multiple options</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <Headphones className="h-8 w-8 text-blue-600 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock customer support</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <Zap className="h-8 w-8 text-purple-600 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quick Returns</h3>
            <p className="text-gray-600">Easy returns within 30 days</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of top-quality products at amazing prices
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/products"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600">Find exactly what you're looking for</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Electronics', 'Fashion', 'Home & Kitchen', 'Books', 'Sports', 'Beauty', 'Toys', 'Automotive'].map((category) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-4xl mb-4">
                  {category === 'Electronics' && '📱'}
                  {category === 'Fashion' && '👕'}
                  {category === 'Home & Kitchen' && '🏠'}
                  {category === 'Books' && '📚'}
                  {category === 'Sports' && '⚽'}
                  {category === 'Beauty' && '💄'}
                  {category === 'Toys' && '🧸'}
                  {category === 'Automotive' && '🚗'}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;