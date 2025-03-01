import { useEffect, useState } from "react";
import BagCard from "../BagCard/BagCard";
import { motion } from 'framer-motion';


const LatestCollection = () => {
    const [bags, setBags] = useState([]);
    useEffect(()=>{
        fetch("bags.json")
        .then(res=> res.json())
        .then(data=> setBags(data))
    },[])

    console.log(bags);
  return (
    <div>
      <div className="text-center space-y-3 my-10">
        <h2 className="text-6xl text-gray-600">
          Latest Collections <span className="text-2xl">______</span>
        </h2>
        <p className="text-gray-600">
          Discover our newest collection of stylish and durable bags, perfect
          for every occasion. From trendy backpacks to premium travel luggage,
          explore the latest arrivals designed to suit your lifestyle.
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
            bags.map((bag)=> <BagCard key={bag.id} bag={bag}></BagCard>)
        }
      </div>
    </div>
  );
};

export default LatestCollection;
