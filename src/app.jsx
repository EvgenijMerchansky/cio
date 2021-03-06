import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IndividualSingerTrack from './Common/IndividualSingerTrack';
import AlbumSongs from './Common/AlbumSongs';

import Home from './Common/Home';
import Body from './Common/Body';
function App() {
    return (
        <div>
            <Router>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path={`/singers/singer`} component={IndividualSingerTrack}/>
                    <Route path={`/singers/singer/name`} component={AlbumSongs}/>
                </div>
            </Router>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById(`content`)
);


