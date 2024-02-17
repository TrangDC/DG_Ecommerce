import React from 'react';
import {products} from "../../data/Data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {removeItem, updateQuantity} from "../../redux/CartSlice";

const Cart = () => {

    const dispatch = useDispatch();
    const increaseQty = (cartProductId, currentQty) => {
        const newQty = currentQty + 1;
        dispatch(updateQuantity({
            id: cartProductId,
            quantity: newQty
        }))
    };

    const decreaseQty = (cartProductId, currentQty) => {
        const newQty = Math.max(currentQty - 1, 1);
        dispatch(updateQuantity({
            id: cartProductId,
            quantity: newQty
        }))
    };

    const {
        data: cartProducts,
        totalAmounts,
        deliveryCharge,
    } = useSelector((state) => state.cart);

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem({id: itemId}));
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-light table-borderless text-center mb-0">
                            <thead className="thead-dark">
                            <tr>
                                <th>Product name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                cartProducts.map((value, index) => (
                                    <tr>
                                        <td className="align-middle">
                                            <img
                                                src={value.product_img}
                                                alt={"img"}
                                                style={{width: "50px"}}
                                            />
                                            {value.product_name}
                                        </td>
                                        <td className="align-middle">
                                            {value.price}
                                        </td>
                                        <td className="align-middle">
                                            <div className="input-group quantity mx-auto">
                                                <div className="input-group-btn">
                                                    <button
                                                        className="btn btn-sm btn-primary btn-minus"
                                                        type="button"
                                                        onClick={() => decreaseQty(value.id, value.quantity)}
                                                    >
                                                      <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                                    </button>
                                                </div>

                                                <input
                                                    type="text"
                                                    name="text"
                                                    value={value.quantity || 1}
                                                    className="form-control form-control-sm bg-secondary border-0 text-center"
                                                />

                                                <div className="input-group-btn">
                                                    <button
                                                        className="btn btn-sm btn-primary btn-plus"
                                                        type="button"
                                                        onClick={() => increaseQty(value.id, value.quantity)}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                                    </button>
                                                </div>

                                            </div>
                                        </td>
                                        <td className="align-middle">
                                            {value.totalPrice}
                                        </td>
                                        <td className="align-middle">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleRemoveItem(value.id)}
                                            >
                                                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Cart;