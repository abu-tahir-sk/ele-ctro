import Banner from "../Banner";
import Offers from "../Offers";
import ProductGrid from "../ProductGrid";



const Home = () => {
      return (
            <div>
                  <div className="pb-4">
                        <Banner></Banner>
                  </div>
                  <div>
                        <Offers></Offers>
                  </div>
                  <ProductGrid></ProductGrid>
            </div>
      );
};

export default Home;