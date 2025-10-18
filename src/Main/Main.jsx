import { Outlet } from "react-router-dom";

import LargeNav from "../MainHeader/LargeNav";
import Header from "../Header/Header";
import FooterSection from "../components/FooterSection";
// import Reveal from "../animation/Reveal";

const Main = () => {
  return (
    // <Reveal>
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
          <Outlet />
        </main>
        <footer>
          <FooterSection />
        </footer>
      </div>
    // </Reveal>
  );
};

export default Main;
