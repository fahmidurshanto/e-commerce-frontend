import banner from "../../assets/bags_banner.jpg"
const Banner = () => {
    return (
        <div className="flex justify-center items-center mt-10 border">
            <div className="w-full text-center">
                <p className="font-semibold text-gray-600">___ OUR BEST SELLERS</p>
                <br />
                <h2 className="text-6xl text-gray-600">Latest Arrivals</h2>
                <br />
                <p className="font-semibold text-gray-600">SHOP NOW___</p>
            </div>
            <div className="w-full">
                <img className="w-full" src={banner} />
            </div>
        </div>
    );
};

export default Banner;