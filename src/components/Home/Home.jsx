import React from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";

const Home = () => {
    const tshirts = useLoaderData();
    console.log(tshirts);
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row mt-3">
                            {tshirts.map((tshirt) => (
                                <Tshirt key={tshirt._id} tshirt={tshirt}></Tshirt>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
