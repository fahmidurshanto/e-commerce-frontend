import banner from "../../assets/bags_banner.jpg";
import {motion} from "framer-motion"

const Banner = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                when: "beforeChildren"
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { type: "spring", stiffness: 120 }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
        hover: {
            scale: 1.02,
            transition: { duration: 0.3 }
        }
    };

 ;

    return (
        <motion.div 
            className="flex justify-center items-center mt-10 border"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="w-full text-center">
                <motion.p 
                    className="font-semibold text-gray-600"
                    variants={textVariants}
                >
                    ___ OUR BEST SELLERS
                </motion.p>
                <br />
                <motion.h2 
                    className="text-6xl text-gray-600"
                    variants={textVariants}
                >
                    Latest Arrivals
                </motion.h2>
                <br />
                <motion.p 
                    className="font-semibold text-gray-600 cursor-pointer"
                    variants={textVariants}
                    whileHover="hover"
                >
                    SHOP NOW___
                </motion.p>
            </div>

            <motion.div 
                className="w-full"
                variants={imageVariants}
                whileHover="hover"
            >
                <motion.img 
                    className="w-full" 
                    src={banner} 
                    alt="Bags Banner"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </motion.div>
    );
};

export default Banner;