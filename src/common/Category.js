import React, {useState} from 'react';
import {category} from "../data/Data";
import {Link} from "react-router-dom";

const Category = () => {

    const [show, setShow] = useState(false);
    const [hover, setHover] = useState(false);

    const handleMouseEnter = (cat_id) => {
        setHover(cat_id)
    }

    const handleMouseLeave = () => {
        setHover(null);
    }


    return (
        <div>
            <Link className="btn d-flex align-items-center justify-content-between bg-dark w-100"
                  style={{height: "65px", padding: "0 30px"}}
                  onClick={() => setShow(!show)}>
                <h6 className="text-white m-0">
                    <i className="fa fa-bars mr-2"></i> Categories
                </h6>
                <i className="fa fa-angle-down text-white"></i>
            </Link>
            <nav
                className={show
                            ? "show position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                            : "collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                }
                style={{width:"calc(100%-30px)", zIndex: "999"}}
            >
                <div className="navbar-nav w-100">
                    {
                        category.map((value, index) => (
                            <div key={index}>
                                {value.category_name}
                            </div>
                        ))
                    }
                </div>
            </nav>
        </div>
    );
};

export default Category;