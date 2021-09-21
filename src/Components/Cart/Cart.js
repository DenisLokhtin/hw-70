import React from 'react';
import './Cart.css'
import {useDispatch, useSelector} from "react-redux";
import Card from "../Card/Card";

const Cart = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const cartProducts = [];
    let total = 0;
    const deliveryPrice = 150;

    for (const [key, value] of Object.entries(cart)) {
        cartProducts.push({
            name: key,
            count: value.count,
            price: value.price,
        })
        total += value.count * value.price
    }

    return (
        <div className="cart">
            <div className="order">
                {cartProducts.map((product, index) => (
                    <p key={index}>{product.name} <span> {product.price * product.count} Cом</span> <span>{product.count}X &ensp;</span></p>
                ))}
            </div>
            <div>
                <p>доставка: <span>{deliveryPrice} сом</span></p>
                <p>итого: <span>{cartProducts.length === 0  ? 0 : total + deliveryPrice} сом</span></p>
            </div>
            <div className="order-btn">
                <button disabled={cartProducts.length === 0}>Оформить заказ</button>
            </div>
        </div>
    )
};

export default Cart;