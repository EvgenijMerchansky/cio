import React, { Component } from 'react';
import axios from 'axios';
import styles from './style.scss';
import {
    Link
} from 'react-router-dom';
import 'regenerator-runtime/runtime';

const REQUESTALIAS = `http://ws.audioscrobbler.com/2.0`; // refact to individual file!
const APIKEY = `3de70bc0e205f2805864e253e870c98b`; // refact to individual file!
const NOTFOUNDIMG = `http://www.suffolk.edu/applytolawschool/_images/icons/play_btn.png`; // refact to individual file!

class IndividualSingerTrack extends Component {
    constructor() {
        super();
        this.state = {
            renderData: '',
            waiting: true,
        }
    }
    componentDidMount() {
        let that = this,
            artistName = this.props.location.pathname.split('/')[3],
            getData = async function(){
            try {
                let request = await axios.get(`${REQUESTALIAS}/?method=album.search&album=${artistName}&api_key=${APIKEY}&format=json`),
                    response = await request.data.results.albummatches.album;
                    that.setState({
                        renderData: response,
                        waiting: false
                    });
            } catch (err) {
                throw new Error(console.log(err), 'FAILED TO GET DATA!');
            }
        };

        // setTimeout(() => { // for testing loader!!!
            getData();
        // }, 10000); // for testing loader!!!
    }
    render() {
        let {renderData, waiting} = this.state;
        return(
            <div className={`common-container`}>
                {!waiting &&
                <Link
                    to={`/`}
                    className={`back-link`}
                >
                    {`Back to Home page`}
                </Link>
                }
                {waiting &&
                    <div>
                        LOADER BLOCK
                    </div>
                }
                {renderData && renderData.map((elem, index) => {
                    return(
                        <div
                            key={index}
                            className={`container custom-cont`}
                        >
                            <ul className={`render-ul`}>
                                <li className={`render-li`}>
                                    <img
                                        src={elem.image[3]['#text'] ? elem.image[3]['#text'] : NOTFOUNDIMG}
                                        width={100}
                                        className={`render-icon`}
                                    />
                                    <div className={`text-block`}>
                                        <p className={`artist-name`}>
                                            {elem.artist}
                                        </p>
                                        <Link to={`/singers/singer/name/${elem.name}_${elem.artist}`} className={`song-name`}>
                                            {elem.name}
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    );
                })}
                {(renderData.length < 1 && !waiting) && <h1> Songs not found! </h1>}
            </div>
        );
    }
}

export default IndividualSingerTrack;