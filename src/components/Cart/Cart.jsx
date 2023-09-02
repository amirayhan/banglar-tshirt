import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>;
    } else {
        message = (
            <div>
                <h5>Borolokxx</h5>
                <p>Thanks for giving money!</p>
            </div>
        );
    }
    return (
        <div className="cart">
            {cart.length > 2 ? <span>Buy More!!</span> : <span>Fokir!!</span>}
            <h3 className={cart.length === 0 ? "red" : "green"}>Total Items: {cart.length}</h3>
            <p className={`bold ${cart.length === 3 ? "orange" : "green"}`}>{message}</p>
            {cart.map((tshirt) => (
                <p key={tshirt._id}>
                    {tshirt.name}{" "}
                    <button onClick={() => handleRemoveCart(tshirt._id)} className="btn btn-danger">
                        X
                    </button>
                </p>
            ))}
            {cart.length === 2 && <p>Double Bonanza!!</p>}
            {cart.length === 3 || <p>Tinta to hoilo na</p>}
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 */

/**
 * CONDITIONAL STYLES
 * 1. use ternary
 * 2. ternary inside template string
 */
