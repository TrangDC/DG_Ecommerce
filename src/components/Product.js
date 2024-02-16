import React, {useState} from 'react';
import {category, products} from "../data/Data";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faSearch, faShoppingCart, faSyncAlt} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {addToCart, getCartTotal} from "../redux/CartSlice";

const Product = () => {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1)
    const handleAddToCart = (product) => {
        let totalPrice = qty * product.price;
        const tempProduct = {
            ...product,
            quantity: qty,
            totalPrice,
        }
        dispatch(addToCart(tempProduct));
        dispatch(getCartTotal());
    }

    return (
        <div className="container-fluid pt-5 pb-3">
            <div className="row px-xl-5">
                {products.map((value, index) =>(
                    <div key={index} className="col-lg-3 col-md-6 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img
                                    className="img-fluid w-100"
                                    src={value.product_img}
                                    alt="img"
                                />
                                    <div className="product-action">
                                        <Link 
                                            className="btn btn-outline-dark btn-square"
                                            onClick={() => {handleAddToCart(value)}}
                                        >
                                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                        </Link>
                                        <Link className="btn btn-outline-dark btn-square">
                                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                        </Link>
                                        <Link className="btn btn-outline-dark btn-square">
                                            <FontAwesomeIcon icon={faSyncAlt}></FontAwesomeIcon>
                                        </Link>
                                        <Link className="btn btn-outline-dark btn-square">
                                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                        </Link>
                                    </div>
                                </div>
                            <div className="text-center py-4">
                                <Link className="h6 text-decoration-none text-truncate">
                                    {value.product_name}
                                </Link>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>${value.price}</h5>
                                    <h6 className="text-muted ml-2">
                                        <del>${value.price}</del>
                                    </h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    {value.stars}
                                    <small>({value.ratingCount})</small>
                                </div>
                            </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;