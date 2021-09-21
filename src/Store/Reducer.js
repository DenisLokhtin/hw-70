import {addProduct, setMessage, setPost, setState} from "./Action";

const initialState = {
    products: [],
    cart: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case setState:
            return {...state, products: action.payload};
        case addProduct:
            return {
                ...state, cart: {
                    name: action.name,
                    price: action.price,
                    count: 1,
                }
            };
        case setPost:
            return {...state, posts: action.payload}
        case setMessage:
            return {...state, message: action.payload};
        default:
            return state;
    }
}


export default reducer;