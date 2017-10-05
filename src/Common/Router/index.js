import React, { Component } from 'react';
import Body from '../Body';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';



class RouterModule extends Component {

    render() {
        return(
            <div>
                <Router>
                    <div>
                        <Route exact path={`/`} component={Body}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default RouterModule;