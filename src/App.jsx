import LatestCollection from "./components/LatestCollection/LatestCollection";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="outfit-font container mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <LatestCollection></LatestCollection>
    </div>
  );
};

export default App;