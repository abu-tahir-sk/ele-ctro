import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import LargeNav from "../MainHeader/LargeNav";
import Header from "../Header/Header";



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
                        <Footer/>
                  </footer>
                  
            </div>
      );
};

export default Main;