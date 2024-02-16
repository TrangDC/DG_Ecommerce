import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import TopBar from "./TopBar";
import {nav} from "../data/Data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import Category from "./Category";

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
                    <Category/>
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
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={toggler
                                ? "toggle navbar-collapse justify-content-between"
                                : "navbar-collapse justify-content-between collapse"}>

                                <div className="navbar-nav mr-auto py-0">
                                    {
                                        nav.slice(0, 4).map((value, index) => (
                                            <Link to={value.path} key={index} className="nav-link nav-item text-white">
                                                {value.text}
                                            </Link>
                                        ))
                                    }
                                </div>
                                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                    <Link className="btn px-0 ml-2" to="/">
                                        <FontAwesomeIcon icon={faHeart} className="text-white" />
                                        <span className="badge text-white border border-dark rounded-circle" style={{ paddingBottom: "2px" }}>0</span>
                                    </Link>
                                    <Link className="btn px-0 ml-2" to="/">
                                        <FontAwesomeIcon icon={faShoppingCart} className="text-white" />
                                        <span className="badge text-white border border-dark rounded-circle" style={{ paddingBottom: "2px" }}>0</span>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;