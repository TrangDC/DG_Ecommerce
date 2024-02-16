import React from 'react';
import {nav, topdropdown} from "../data/Data";
import {Link} from "react-router-dom";

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
                            <i className="fas fa-heart text-dark"></i>
                            <span></span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopBar;