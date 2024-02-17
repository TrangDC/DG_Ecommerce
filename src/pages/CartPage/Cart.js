import React, {useEffect} from 'react';
import {products} from "../../data/Data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {getCartTotal, removeItem, updateQuantity} from "../../redux/CartSlice";
import StripeCheckout from "react-stripe-checkout";
import Heading from "../../common/Heading";

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

    useEffect(() => {
        dispatch(getCartTotal())
    }, [useSelector((state) => state.cart)]);

    const emptyCartMsg = (
        <h4 className="container text-center p-4">Your Cart is Empty</h4>
    )

    return (
        <>
            <Heading title="Home" subtitle="Cart" />
            {cartProducts.length === 0 ?
                (
                    emptyCartMsg
                ) : (
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
                            <div className="col-lg-4">
                                <form className="mb-30" action="">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control border-0 p-4"
                                            placeholder="Coupon Code"
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary">Apply Coupon</button>
                                        </div>
                                    </div>
                                </form>
                                <h5 className="section-title position-relative text-uppercase mb-3">
                                    <span className="bg-secondary pr-3">Cart Summary</span>
                                </h5>
                                <div className="bg-light p-30 mb-5">
                                    <div className="border-bottom pb-2">
                                        <div className="d-flex justify-content-between mb-3">
                                            <h6>Subtotal</h6>
                                            <h6>{totalAmounts}</h6>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-medium">Shipping</h6>
                                            <h6 className="font-weight-medium">{deliveryCharge}</h6>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <div className="d-flex justify-content-between mt-2">
                                            <h5>Total</h5>
                                            <h5>{totalAmounts + deliveryCharge}</h5>
                                        </div>
                                        <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                                            Proceed To Checkout
                                        </button>
                                        {/*<StripeCheckout*/}
                                        {/*token={onToken}*/}
                                        {/*stripeKey={publishableKey}*/}
                                        {/*amount={100 * totalAmounts}*/}
                                        {/*name="MD"*/}
                                        {/*currency="USD"*/}
                                        {/*label="Proceed Checkout"*/}
                                        {/*className="btn btn-block btn-primary font-weight-bold my-3 py-3"*/}
                                        {/*/>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }

        </>
    );
};

export default Cart;