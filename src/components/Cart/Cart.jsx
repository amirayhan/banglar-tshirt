import React from "react";

const Cart = ({ cart, handleRemoveCart }) => {
    return (
        <div className="cart">
            <h3>Total Items: {cart.length}</h3>
            {cart.map((tshirt) => (
                <p key={tshirt._id}>
                    {tshirt.name}{" "}
                    <button onClick={() => handleRemoveCart(tshirt._id)} className="btn btn-danger">
                        X
                    </button>
                </p>
            ))}
        </div>
    );
};

export default Cart;
