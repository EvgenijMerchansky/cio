import React, { Component } from "react";
import ReactDOM from "react-dom";

import ContainerBlock from './Common/Container';

function App() {
    return (
        <div>
            <ContainerBlock title={`Add todos form:`} buttonTitle={`Add task`}/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById(`content`)
);


