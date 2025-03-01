import React from 'react';
import { motion } from 'framer-motion';

const BagCard = ({ bag }) => {
    const { name, brand, price, thumbnail } = bag;

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

    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <motion.div
            className='cursor-pointer'
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
        >
            <motion.img 
                src={thumbnail} 
                className='w-full h-64 object-cover rounded-lg shadow-md'
                variants={imageVariants}
                whileHover="hover"
            />
            
            <motion.div 
                className='mt-3 space-y-1'
                variants={{
                    visible: { 
                        transition: { staggerChildren: 0.1 } 
                    }
                }}
            >
                <motion.p 
                    className='text-gray-600 font-extralight'
                    variants={textVariants}
                >
                    {name}
                </motion.p>
                <motion.p 
                    className='text-gray-600 font-extralight'
                    variants={textVariants}
                >
                    Brand: {brand}
                </motion.p>
                <motion.p 
                    className='font-medium'
                    variants={textVariants}
                >
                    Price: ৳{price}
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default BagCard;