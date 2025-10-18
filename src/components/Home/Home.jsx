import Audio from "../Audio";
import Banner2 from "../Banner2";
import BestDeal from "../BestDeal";
import BrandSlider from "../BrandSlider";
import NewsletterBar from "../NewsletterBar";
import Offers from "../Offers";
import ProductGrid from "../ProductGrid";
import ProductSection from "../ProductSection";
import PromoBar from "../PromoBar";
import SwiperSliders from "../SwiperSlide";
import SwiperSlider from "../SwiperSlider";

const Home = () => {
  return (
    <div>
      <div className="pb-4">
        <Banner2></Banner2>
      </div>
      <div>
        <Offers></Offers>
      </div> 
       <div>
        <ProductGrid></ProductGrid>
       </div>
       <div className="mt-12">
        <BestDeal></BestDeal>
      </div>
      <div className="w-11/12 mx-auto">
        <Audio></Audio>
      </div>
      <div>
        <SwiperSliders></SwiperSliders>
      </div>
      <div>
        <PromoBar></PromoBar>
      </div> 
       <div className="p-6 w-11/12 mx-auto">
        <h2 className="text-2xl  text-gray-800 ">Recently Viewed</h2>
        <div className="border-t-2 border-gray-200  pb-4"></div>
        <SwiperSlider />
      </div>

      <div className="">
        <BrandSlider />
      </div>
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
