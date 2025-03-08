import React from "react";
import Banner from "../pages/Banner";
import About from "../pages/About/About";
import Layout from "../pages/layout/Layout";
import Navri from "../pages/Banner/Navri";
import Navbar from "../pages/Navbar";
import Purusharth from "../pages/Banner/Purusharth";
import Ribben from "../pages/Ribben";
import Parampara from "../pages/Banner/Parampara";
import Shrungar from "../pages/Banner/Shrungar";
import Sushobhit from "../pages/Banner/Sushobhit";
import Soundarya from "../pages/Banner/Soundarya";
import Special from "../pages/Banner/Special";

const Home = () => {
  return (
    <div>
      <Navbar/>
      
        <Banner />

        <Navri />
<Ribben/>
        <Purusharth />
        <Ribben/>

        <Parampara/>
        <Ribben/>
        <Shrungar/>
        <Ribben/>
        <Sushobhit/>
        <Ribben/>
<Special/>
<Ribben/>

<Soundarya/>
    </div>
  );
};

export default Home;
