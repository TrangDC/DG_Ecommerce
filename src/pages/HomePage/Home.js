import React from 'react';
import Banner from "../../components/Banner";
import Features from "../../components/Features";
import Categories from "../../components/Categories";
import Product from "../../components/Product";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Features/>
            <Categories/>
            <Product/>
        </div>
    );
};

export default Home;