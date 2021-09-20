import {setMessage, setPost, setShow, setTitle} from "./Action";

const initialState = {
    title: '',
    message: '',
    posts: [],
    showPost: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case setTitle:
            return {...state, title: action.payload};
        case setShow:
            return {...state, showPost: action.payload};
        case setPost:
            return {...state, posts: action.payload}
        case setMessage:
            return {...state, message: action.payload};
        default:
            return state;
    }
}


export default reducer;