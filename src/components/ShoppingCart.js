import React, {useContext} from 'react';

// Components
import Item from './ShoppingCartItem';
import CartContext from '../context/cartContext'


const ShoppingCart = () => {
	const {cart} = useContext(CartContext)
	console.log('shopping cart', cart)


	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.item.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (

				<Item key={item.item.id} {...item.item} />

			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
