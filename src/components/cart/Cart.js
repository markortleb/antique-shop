import '../../styles/app/Cart.css';
import TopBar from "../common/TopBar";

const Cart = (props) => {

    const CartContent = () => {
        console.log(props.cart);
        if (props.cart.length === 0) {
            return (
                <div className="Content">
                    <span className='CartHeader'>Your Cart is Empty</span>
                </div>
            );
        } else {

            return (
                <div className="Content">
                    <span className='CartHeader'>Your Cart</span>
                    <table className='CartTable'>
                        <thead>
                            <tr>
                                <th className='CartItemName'>Item</th>
                                <th className='CartItemQuantity'>Quantity</th>
                                <th className='CartItemTotalPrice'>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.cart.map(item => {
                                let formattedPrice = (item.price * item.quantity).toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                });

                                return (
                                    <tr>
                                        <td className='CartItemName'>{item.name}</td>
                                        <td className='CartItemQuantity'>{item.quantity}</td>
                                        <td className='CartItemTotalPrice'>{formattedPrice}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
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
