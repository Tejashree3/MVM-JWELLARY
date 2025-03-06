import React from "react";
import Banner from "../pages/Banner";
import About from "../pages/About/About";
import Layout from "../pages/layout/Layout";
import Navri from "../pages/Banner/Navri";
import Navbar from "../pages/Navbar";
import Purusharth from "../pages/Banner/Purusharth";

const Home = () => {
  return (
    <div>
      <Navbar/>
      
       <div id="">
        <Banner />
      </div>

      <div className="">
        <Navri />
      </div>    
      <div className="">
        <Purusharth />
      </div>   
    </div>
  );
};

export default Home;
