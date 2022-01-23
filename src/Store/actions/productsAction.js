import axiosApi from "../../AxiosAPI";

export const SET_STATE = 'SET STATE';

export const setState = (value) => ({type: SET_STATE, payload: value});

export const getOrders = () => {
    return async dispatch => {
        try {
            await axiosApi.get('/Products.json').then(response => {
                if (response.data !== null) {
                    const arrayPosts = Object.values(response.data);
                    dispatch(setState([...arrayPosts]));
                }
            });
        } catch (e) {
            alert(e)
        }
    }
};
