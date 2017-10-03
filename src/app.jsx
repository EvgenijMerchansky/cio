import React, { Component } from "react";
import ReactDOM from "react-dom";

import Home from './Common/Home';

function App() {
    return (
        <div>
            <Home/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById(`content`)
);


