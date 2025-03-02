import { motion } from 'framer-motion';
import { useState } from 'react';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  const sizes = ['M', 'L', 'XL'];
  const features = [
    'Greenhead 2024 Authentic - Deep with Confidential',
    'Eggy Cookie Delivery - Prep If not Decorated',
    'Hassle Free Recruit & Exchanges - 10 Days No Questions Asked'
  ];

  return (
    <motion.div 
      className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Product Image */}
      <motion.div 
        className="md:w-1/2 bg-gray-100 rounded-lg overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img 
          src="/path-to-image.jpg" 
          alt="T-shirt" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Product Details */}
      <div className="md:w-1/2 space-y-6">
        {/* Title and Price */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold text-gray-800">Men Round Neck Pure Cotton T-shirt</h1>
          <p className="text-2xl font-semibold text-gray-700 mt-2">$200</p>
        </motion.div>

        {/* Size Selection */}
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-medium text-gray-600">Select Size</h3>
          <div className="flex gap-4">
            {sizes.map((size) => (
              <motion.button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-6 py-2 rounded-full border ${
                  selectedSize === size 
                    ? 'bg-gray-800 text-white border-gray-800' 
                    : 'border-gray-300 hover:border-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {size}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-gray-200 my-6" />

        {/* Features */}
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 text-gray-600"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 * index }}
            >
              <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
              <p>{feature}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Add to Cart Button */}
        <motion.button
          className="w-full py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          ADD TO CART
        </motion.button>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {['description', 'reviews'].map((tab) => (
            <motion.div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 pb-2 cursor-pointer ${
                activeTab === tab 
                  ? 'text-gray-800 border-b-2 border-gray-800' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} {tab === 'reviews' && '(122)'}
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.p
          className="text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Elevate your style with our meticulously crafted premium quality products. Designed with a perfect balance 
          of elegance and practicality, these items are made from premium materials that ensure both durability 
          and comfort.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProductDetails;