import React, {useEffect} from 'react';
import Card from "../Card/Card";
import axiosApi from "../../AxiosAPI";
import {useDispatch, useSelector} from "react-redux";
import './Menu.css'

const Menu = (props) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.products);
    const setState = (value) => dispatch({type: 'SET STATE', payload: value});


    useEffect(() => {
        const getOrders = async () => {
            try {
                await axiosApi.get('/Products.json').then(response => {
                    if (response.data !== null) {
                        const arrayPosts = Object.values(response.data);
                        setState([...arrayPosts]);
                    }
                });
            } catch (e) {
                alert(e)
            }
        };
        getOrders()
    }, []);

    return (
        <div className="menu">
            {state.map((product, index) => (
                <Card name={product.name} img={product.img} price={product.price} key={index}/>
            ))}
        </div>
    )
}

export default Menu;