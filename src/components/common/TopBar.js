import '../../styles/app/TopBar.css';

const TopBar = () => {

    return (
        <div className='TopBar'>
            <h1>Mark's Antique Shop</h1>
            <h2>Where the past comes to life</h2>
            <div className='Links'>
                <span>Home</span>
                <span>View Cart</span>
            </div>
        </div>
    );
};

export default TopBar;