import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import TopBar from "./TopBar";

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [toggler, setToggler] = useState(false);

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
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark nav-dark py-3 py-lg-0 px-0">
                            <Link className="text-decoration-none d-block d-lg-none" to={"/"}>
                                <span className="h1 text-uppercase text-primary bg-dark px-2">
                                    Multi
                                </span>
                                <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                                    Shop
                                </span>
                            </Link>
                            <button type="button"
                                    className="navbar-toggler bg-success"
                                    onClick={() => setToggler(!toggler)}>
                                <span className="navbar-toggler-icon">
                                </span>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
            {/*<Link to={"/"}>Home</Link>*/}
            {/*<Link to={"/shop"}>Shop</Link>*/}
            {/*<Link to={"/cart"}>Cart</Link>*/}
        </div>
    );
};

export default Header;