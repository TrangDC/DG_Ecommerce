import React from 'react';
import {nav} from "../data/Data";
import {Link} from "react-router-dom";

const TopBar = () => {
    return (
        <div className="container-fluid">
            <div className={"row bg-secondary py-1 px-xl-5"}>
                <div className="col-lg-6 d-none d-lg-block">

                </div>

                <div className={"col-lg-6 d-lg-block"}>
                    <div className="d-inline-flex align-items-center h-100">
                        {
                            nav.slice(2, 5).map((value, index) => (
                                <Link key={index} className={"text-body mr-3"}>
                                    {value.text}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;