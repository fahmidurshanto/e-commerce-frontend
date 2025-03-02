import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BagCard = ({ bag }) => {
    const { name, brand, price, thumbnail, id } = bag;

    // Create motion-enhanced Link component
    const MotionLink = motion(Link);

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -5,
            transition: { type: "spring", stiffness: 300 }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };

    return (
        <MotionLink 
            to={`/productDetails/${id}`}
            className='block w-full cursor-pointer'
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            <motion.img 
                src={thumbnail} 
                className='w-full h-64 object-cover rounded-lg shadow-md'
                variants={imageVariants}
                whileHover="hover"
            />
            
            <div className='mt-3 space-y-1'>
                <p className='text-gray-600 font-extralight'>{name}</p>
                <p className='text-gray-600 font-extralight'>Brand: {brand}</p>
                <p className='font-medium'>Price: ৳{price}</p>
            </div>
        </MotionLink>
    );
};

export default BagCard;