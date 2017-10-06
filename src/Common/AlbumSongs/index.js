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

class AlbumSongs extends Component {
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
                    let request = await axios.get(`${REQUESTALIAS}/?method=album.getinfo&api_key=${APIKEY}&artist=${artistName}&album=Believe&format=json`),
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
        console.log(this.state, 'state state');
        return(
            <div>
                Album tracks page!
            </div>
        );
    }
}

export default AlbumSongs;