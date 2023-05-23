import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/app/App";
import Cart from "./components/cart/Cart";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;