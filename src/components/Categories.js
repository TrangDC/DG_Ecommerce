import React from 'react';
import {category, features} from "../data/Data";
import {Link} from "react-router-dom";

const Categories = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
                {category.map((value, index) =>(
                    <div key={index} className="col-lg-3 col-md-6 col-sm-6 pb-1">
                        <Link className="text-decoration-none">
                            <div className="cat-item d-flex align-items-center mb-4">
                                <div
                                    className="overflow-hidden"
                                    style={{ width: "100px", height: "100px" }}
                                >
                                    <img src={value.img} className="img-fluid" alt="img"/>
                                </div>
                                <div>
                                    <h5 className="flex-fill pl-3">{value.category_name}</h5>
                                    <small className="text-body">{value.quantity}</small>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;