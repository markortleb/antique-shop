import '../../styles/app/TopBar.css';

const TopBar = () => {

    return (
        <div className='TopBar'>
            <div className="Headers">
                <h1>Mark's Antique Shop</h1>
                <h2>Where the past comes to life</h2>
            </div>
            <ul className='Links'>
                <li><a href="./">Home</a></li>
                <li><a href="./cart">Cart</a></li>
                <li><a href="./checkout">Checkout</a></li>
            </ul>
        </div>
    );
};

export default TopBar;