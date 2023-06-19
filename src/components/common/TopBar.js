import '../../styles/app/TopBar.css';
import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {

    return (
        <div className='TopBar'>
            <div className="Headers">
                <h1>Mark's Antique Shop</h1>
                <h2>Where the past comes to life</h2>
            </div>
            <ul className='Links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <li><Link to='/checkout'>Checkout</Link></li>
            </ul>
        </div>
    );
};

export default TopBar;