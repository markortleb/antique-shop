import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";

const RouteSwitch = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {

        if (cart.filter(cartItem => cartItem.name === item.name).length > 0) {
            const index = cart.map(cartItem => cartItem.name).indexOf(item.name);
            cart[index].quantity += 1;
        } else {
            item['quantity'] = 1;
            cart.push(item);
        }

        console.log(cart);
        setCart(cart);
    };


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home cart={cart} addToCart={addToCart}/>} />
                <Route path="/cart" element={<Cart cart={cart} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;