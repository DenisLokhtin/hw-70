import Reac.t from 'react';
import './Card.css';
import {useDispatch, useSelector} from "react-redux";

const Card = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const addProduct = (name, price) => dispatch({type: 'ADD PRODUCT', name: name, price: price});

    const names = (name) => {
        switch (props.name) {
            case "plov":
                return "Плов";
            case "manti":
                return "Манты";
            case "lepeshka":
                return "Лепёшка";
            case "shakarap":
                return "Шакарап";
            case "boson Lagman":
                return "Босо лагман";
            default:
                return "product";
        }
    }

    return (
        <div key={props.index} className="card">
            {console.log(cart)}
            <img className="img" src={props.img} alt=""/>
            <div className="info">
                <p>{names()}</p>
                <p>{props.price} сом</p>
            </div>
            <div>
                <button onClick={() => addProduct(props.name, props.price)} className="btn">Add to cart</button>
            </div>
        </div>
    )
};

export default Card;