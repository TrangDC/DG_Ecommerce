import React from 'react';
import Banner from "../../components/Banner";
import Features from "../../components/Features";
import Categories from "../../components/Categories";
import Product from "../../components/Product";
import Vendor from "../../components/Vendor";
import Offers from "../../components/Offers";

const Home = () => {
    return (
        <div>
            <Banner />
            <Features />
            <Categories />
            <Product />
            <Offers />
            <Vendor />
        </div>
    );
};

export default Home;