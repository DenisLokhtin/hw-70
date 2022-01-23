import React, {useEffect} from 'react';
import Card from "../Card/Card";
import {useDispatch, useSelector} from "react-redux";
import './Menu.css'
import {getOrders} from "../../Store/actions/productsAction";

const Menu = (props) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.products.products);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    return (
        <div className="menu">
            {state.map((product, index) => (
                <Card name={product.name} img={product.img} price={product.price} key={index}/>
            ))}
        </div>
    )
}

export default Menu;