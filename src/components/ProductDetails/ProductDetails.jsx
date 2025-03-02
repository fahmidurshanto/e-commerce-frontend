import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  const [currentImage, setCurrentImage] = useState('');
  const product = useLoaderData();

  // Destructure with fallback values
  const {
    id,
    name = '',
    price = 0,
    sizes = [],
    description = '',
    reviews = [],
    images = [],
    thumbnail = '',
    rating = 0
  } = product || {};

  // Combine thumbnail with images and remove duplicates
  const allImages = Array.from(new Set([thumbnail, ...images]));
  if (!currentImage && allImages.length > 0) {
    setCurrentImage(allImages[0]);
  }

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'reviews', label: `Reviews (${reviews.length})` }
  ];

  return (
    <motion.div 
      className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto my-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Gallery Section */}
      <div className="md:w-1/2">
        <motion.div 
          className="bg-gray-100 rounded-lg overflow-hidden mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img 
            src={currentImage} 
            alt={name}
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* Thumbnail Gallery */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {allImages.map((img, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImage(img)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                currentImage === img ? 'border-gray-800' : 'border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={img} 
                alt={`${name} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="md:w-1/2 space-y-6">
        {/* Product ID and Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm text-gray-500 mb-2">Product ID: {id}</p>
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-2xl font-semibold text-gray-700">৳{price}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i}
                  className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Size Selector */}
        {sizes.length > 0 && (
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-medium text-gray-600">Select Size</h3>
            <div className="flex gap-4 flex-wrap">
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
        )}

        <div className="h-px bg-gray-200 my-6" />

        {/* Add to Cart */}
        <motion.button
          className="w-full py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          ADD TO CART
        </motion.button>

        {/* Info Tabs */}
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 pb-2 cursor-pointer ${
                activeTab === tab.id 
                  ? 'text-gray-800 border-b-2 border-gray-800' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {tab.label}
            </motion.div>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'description' ? (
            <div className="text-gray-600 space-y-4">
              <p className="leading-relaxed whitespace-pre-wrap">{description}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">{review.author}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i}
                          className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.text}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;