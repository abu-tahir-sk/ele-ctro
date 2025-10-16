
import Banner from "../Banner";
import BestDeal from "../BestDeal";
import BrandSlider from "../BrandSlider";
import NewsletterBar from "../NewsletterBar";
import Offers from "../Offers";
import ProductGrid from "../ProductGrid";
import ProductSection from "../ProductSection";
import SwiperSliders from "../SwiperSlide";
import SwiperSlider from "../SwiperSlider";


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
                  <div className="my-12">
                        <BestDeal></BestDeal>
                  </div>
                  <div>
                        <SwiperSlider/>
                  </div>
                  <div>
                        <BrandSlider />
                  </div>   
                  <div>
                        <SwiperSliders></SwiperSliders></div> 
                       <div>
                         <ProductSection></ProductSection>
                       </div>
                       <div>
                        <NewsletterBar></NewsletterBar>
                       </div>
                  
                  
                          </div>
      );
};

export default Home;