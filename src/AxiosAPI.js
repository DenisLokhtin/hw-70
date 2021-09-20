import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://restoran-fac3c-default-rtdb.europe-west1.firebasedatabase.app/Products'
});

export default axiosApi;