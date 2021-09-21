import React from 'react';
import './Cart.css'

const Cart = (props) => (
    <div className="cart">
        <div className="order">
            <p>шакарап x1 <span>130</span></p>
            <p>плов x1 <span>222</span></p>
        </div>
        <div>
            <p>доставка: <span>344</span></p>
            <p>итого: <span>34123</span></p>
        </div>
        <div className="order-btn">
            <button>Оформить заказ</button>
        </div>
    </div>
);

export default Cart;