import '../../styles/app/Cart.css';
import TopBar from "../common/TopBar";

const Cart = (props) => {

    const CartContent = () => {
        console.log(props.cart);
        if (props.cart.length === 0) {
            return (
                <div className="Content">
                    <span className='EmptyCartMessage'>Your Cart is Empty</span>
                </div>
            );
        } else {

            return (
                <div className="Content">
                    <span>Your Cart</span>
                    <ul className='CartList'>
                        {props.cart.map(item => {
                            let formattedPrice = (item.price * item.quantity).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            });

                            return (
                                <li key={`${item.id}-cart`}>
                                    <span className='CartItemName'>{item.name}</span>
                                    <span className='CartItemQuantity'>{item.quantity}</span>
                                    <span className='CartItemTotalPrice'>{formattedPrice}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    };

    return (
        <div className="Cart">
            <TopBar />
            <CartContent />
        </div>
    );
};

export default Cart;
