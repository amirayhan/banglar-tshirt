import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Main from "./components/Layout/Main";
import OrderReview from "./components/OrderReview/OrderReview";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("tshirts.json"),
            },
            {
                path: "review",
                element: <OrderReview></OrderReview>,
            },
            {
                path: "about",
                element: <About></About>,
            },
            {
                path: "contact",
                element: <Contact></Contact>,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
