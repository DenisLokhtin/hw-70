import React from 'react';
import './Card.css';
import {useDispatch, useSelector} from "react-redux";

const Card = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const addProduct = (name, price) => dispatch({type: 'ADD PRODUCT', name: name, price: price});

    return (
        <div key={props.index} className="card">
            {console.log('in card')}
            <img className="img" src={props.img} alt=""/>
            <div className="info">
                <p>{props.name}</p>
                <p>{props.price} сом</p>
            </div>
            <div>
                <button onClick={() => addProduct(props.name, props.price)} className="btn">Add to cart</button>
            </div>
        </div>
    )
};

export default Card;