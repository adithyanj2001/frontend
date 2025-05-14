import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../redux/cartSlice';
import './cart.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <h4>Total Items: {itemCount}</h4>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.img} alt={item.title} className="product-image" />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p>Price: Rs.{item.price} x {item.quantity}</p>
                <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: Rs.{total}</h3>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
