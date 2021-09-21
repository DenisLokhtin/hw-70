import {addProduct, setState} from "./Action";

const initialState = {
    products: [],
    cart: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case setState:
            return {...state, products: action.payload};
        case addProduct:
            if (!state.cart.hasOwnProperty(action.name)) {
                console.log('create')
                return {
                    ...state, cart: {
                        ...state.cart,
                        [action.name]: {
                            price: action.price,
                            count: 1,
                        },
                    }
                }
            }
            console.log(state.cart[action.name].count)
            let count = state.cart[action.name].count + 1
            return {
                ...state, cart: {
                    ...state.cart,
                    [action.name]: {
                        price: action.price,
                        count: count,
                    },
                }
            }
        default:
            return state;
    }
}


export default reducer;