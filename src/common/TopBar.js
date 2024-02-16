import React from 'react';
import {nav, topdropdown} from "../data/Data";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
    return (
        <div className="container-fluid">
            <div className={"row bg-secondary py-1 px-xl-5"}>
                <div className="col-lg-6 d-none d-lg-block">
                    <div className="d-inline-flex align-items-center h-100">
                        {nav.slice(2, 6).map((top, index) => (
                            <Link to={top.path} className="text-body mr-3" key={index}>
                                {top.text}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={"col-lg-6 text-center d-lg-block"}>
                    <div className="d-inline-flex align-items-center h-100">
                        {
                            topdropdown.map((value, index) => (
                                <div className="btn-group" key={index}>
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle">
                                        {value.btn}
                                    </button>
                                </div>
                            ))
                        }
                    </div>

                    <div>
                        <Link className="btn px-0 ml-2" to="/">
                            <FontAwesomeIcon icon={faHeart} className="text-dark" />
                            <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: "2px" }}>0</span>
                        </Link>
                        <Link className="btn px-0 ml-2" to="/">
                            <FontAwesomeIcon icon={faShoppingCart} className="text-dark" />
                            <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: "2px" }}>0</span>
                        </Link>
                    </div>

                </div>
            </div>

            <div className={"row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex"}>
                <div className="col-lg-4">
                    <Link className="text-decoration-none" to={"/"}>
                        <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
                        <span className="h1 text-uppercase text-dark bg-primary px-2">Shop</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopBar;