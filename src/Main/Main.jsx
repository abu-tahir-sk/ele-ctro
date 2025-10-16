import { Outlet } from "react-router-dom";


import LargeNav from "../MainHeader/LargeNav";
import Header from "../Header/Header";
import FooterSection from "../components/FooterSection";



const Main = () => {
      return (
            <div className="">
                  <header>
                      <div className="block lg:hidden">
                        <Header></Header>
                      </div>
                      <div className="hidden lg:block">
                        <LargeNav></LargeNav>
                      </div>
                  </header>
                  <main className="">
                        <Outlet/>
                  </main>
                  <footer>
                        <FooterSection/>
                  </footer>
                  
            </div>
      );
};

export default Main;