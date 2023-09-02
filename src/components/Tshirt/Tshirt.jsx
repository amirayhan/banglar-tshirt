import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price } = tshirt;
    return (
        <div className="col-md-4">
            <div className="tshirt_item text-center mb-4">
                <div className="image">
                    <img src={picture} alt="tshirt" />
                </div>
                <h3 className="mt-2">{name}</h3>
                <p>
                    <small>Price: ${price}</small>
                </p>
                <button onClick={() => handleAddToCart(tshirt)} className="btn btn-success mb-2 buy_now">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default Tshirt;
