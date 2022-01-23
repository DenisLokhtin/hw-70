import React from 'react';
import './Card.css';
import {useDispatch} from "react-redux";
import {addProduct} from "../../Store/actions/cartAction";

const Card = (props) => {
    const dispatch = useDispatch();

    return (
        <div key={props.index} className="card">
            <img className="img" src={props.img} alt=""/>
            <div className="info">
                <p>{props.name}</p>
                <p>{props.price} сом</p>
            </div>
            <div>
                <button onClick={() => dispatch(addProduct(props.name, props.price))} className="btn">Add to cart</button>
            </div>
        </div>
    )
};

export default Card;