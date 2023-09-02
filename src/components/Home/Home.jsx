import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {
        const exists = cart.find((ts) => ts._id === tshirt._id);
        if (exists) {
            toast("This product already exist!!!");
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    };
    const handleRemoveCart = (id) => {
        const remaining = cart.filter((ts) => ts._id !== id);
        setCart(remaining);
    };
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row mt-3">
                            {tshirts.map((tshirt) => (
                                <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-3 mt-3">
                        <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
