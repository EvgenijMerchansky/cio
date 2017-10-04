import React, { Component } from 'react';
import Category from '../Category';
import axios from 'axios';
import styles from './style.scss';
import Modal from '../Modal';


const REQUESTALIAS = `http://ws.audioscrobbler.com/2.0`;
const APIKEY = `3de70bc0e205f2805864e253e870c98b`;

class Home extends Component {
    constructor() {
        super();
        this.state = {
            artists: '',
            modalActive: false,
        };
    }
    componentDidMount() {
        let request = axios.get(`${REQUESTALIAS}/?method=chart.gettopartists&api_key=${APIKEY}&format=json`);
            request.then(response => this.setState({
                artists: response.data.artists,
            }));
    }
    getSoundsByTextQuery(e, queryInput) {
        e.preventDefault();
        let query = axios.get(`${REQUESTALIAS}/?method=track.search&track=${queryInput}&api_key=${APIKEY}&format=json`);
            query.then((resp) => this.setState({
                artists: resp.data.results.trackmatches
            }));
        this.textInput.value = '';
    }
    loginFunc() {
        switch (this.state.modalActive) {
            case false:
                this.setState({
                    modalActive: true
                });
            break;
            case true:
                this.setState({
                    modalActive: false
                });
            break;
        }
    }
    render() {
        return(
            <div style={{ backgroundColor: '#3a3f41' }}>
                <div className={`container header`}>

                    <div className={`logo`}>
                        <h4 style={{ color: '#fff', fontWeight: 100, fontSize: 12, paddingTop: 10, marginRight: -4 }}>
                            LXSound
                        </h4>
                        <img
                            src={`https://soundwavesartfoundation.com/wp-content/themes/swf/assets/images/logo-float.png`}
                            width={150}
                            style={{ display: 'block' }}
                        />
                    </div>
                    <div className={`searchAndLogin`}>
                        <form onSubmit={(e) => {::this.getSoundsByTextQuery(e, this.textInput.value)}}>
                            <input
                                placeholder={`SEARCH BY SONG NAME:`}
                                type={`text`}
                                className={`search-input`}
                                ref={(input) => { this.textInput = input; }}
                            />
                        </form>
                        <img
                            src={`https://www.throtl.com/assets/icons/user-default-gray`}
                            width={25}
                            style={{ display: 'block' }}
                            className={`login-logo`}
                        />
                        <button
                            className={`login-button`}
                            onClick={::this.loginFunc}
                        >
                            <img
                                src={`https://www.etelestia.com/sites/all/themes/etelestia/home/white-arrow-down.png`}
                                width={15}
                                style={{ display: 'block' }}
                            />
                        </button>
                        <Modal modal={this.state.modalActive}/>
                    </div>
                </div>
                <Category artistsToBody={this.state.artists}/>
            </div>
        );
    }
}

export default Home;