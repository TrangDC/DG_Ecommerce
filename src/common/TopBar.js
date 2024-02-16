import React from 'react';
import {nav, topdropdown} from "../data/Data";
import {Link} from "react-router-dom";

const TopBar = () => {
    return (
        <div className="container-fluid">
            <div className={"row bg-secondary py-1 px-xl-5"}>
                <div className="col-lg-6 d-none d-lg-block">

                </div>

                <div className={"col-lg-6 text-center d-lg-block"}>
                    <div className="d-inline-flex align-items-center h-100">
                        {
                            topdropdown.map((value, index) => (
                                <div>
                                    <button type="button">
                                        {value.btn}
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;