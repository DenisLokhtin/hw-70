import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Store/configureStore';
import {Provider} from "react-redux";


const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));