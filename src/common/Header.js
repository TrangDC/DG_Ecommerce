import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import TopBar from "./TopBar";

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if(window.scrollY > 100) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    }

    return (
        <div>
            <TopBar/>
            <div className={`container-fluid bg-dark mb-30
                            ${ isSticky ? "sticky-header": ""}`}>
                <div className="row px-xl-5">
                    Category
                    <div>
                        <nav>
                            <Link className="text-decoration-none d-block d-lg-none" to={"/"}>
                                <span className="h1 text-uppercase text-primary bg-dark px-2">
                                    Multi
                                </span>
                                <span className="h1 text-uppercase text-dark bg-primary px-2">
                                    Shop
                                </span>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <Link to={"/"}>Home</Link>
            <Link to={"/shop"}>Shop</Link>
            <Link to={"/cart"}>Cart</Link>
        </div>
    );
};

export default Header;