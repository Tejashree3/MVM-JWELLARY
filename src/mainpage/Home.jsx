import React from "react";
import Banner from "../pages/Banner";
import About from "../pages/About/About";
import Layout from "../pages/layout/Layout";
import Navri from "../pages/Banner/Navri";

const Home = () => {
  return (
    <div>

      <Layout>

        <div id="">

      <Banner />
      </div>

      <div className="">
        <Navri/>
      </div>
      <div id="">
        <About />
      </div>
    </Layout>

    </div>
  );
};

export default Home;
