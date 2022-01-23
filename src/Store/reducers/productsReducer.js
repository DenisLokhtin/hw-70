import {SET_STATE} from "../actions/productsAction";

const initialState = {
    products: [],
    cart: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE:
            return {...state, products: action.payload};
        default:
            return state;
    }
};


export default reducer;