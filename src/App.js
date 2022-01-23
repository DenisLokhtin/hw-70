import Cart from "./Components/Cart/Cart";
import Menu from "./Components/Menu/Menu";
import './App.css';
import React from "react";

function App() {
    return (
        <div className="container">
            <Menu/>
            <Cart/>
        </div>
    );
}

export default App;
