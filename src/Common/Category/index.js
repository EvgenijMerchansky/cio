import React, { Component } from 'react';
import Body from '../Body';
import axios from 'axios';
import styles from './style.scss';

class Category extends Component {
    constructor() {
        super();
        this.state = {
            tags: '',
            newTag: '',
            genreName: '',
        };
    }
    componentDidMount() {
        let requset = axios.get(`http://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&api_key=3de70bc0e205f2805864e253e870c98b&format=json`);
        requset.then(response => this.setState({
            tags: response.data
        }));
    }
    getMusicWithCategory(genreName) {
        let processedGenre = genreName.indexOf(' ') ? genreName.replace(' ', '') : genreName;
        let currentGenre = axios.get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${processedGenre}&api_key=3de70bc0e205f2805864e253e870c98b&format=json`);
            currentGenre.then(resp => this.setState({
                newTag: resp.data.topartists
            }));
            this.setState({
                genreName: genreName
            })
    }
    render() {
        return(
            <div className={`category-container`}>
                <div className={`category-wrapper`}>
                    {this.state.tags.toptags && this.state.tags.toptags.tag.slice(0, 14).map((elem, index) => {
                        return(
                            <button
                                key={index}
                                className={`category-item`}
                                style={{ boxShadow: this.state.genreName === elem.name? 'inset 0px -5px 0px 0px rgba(126, 197, 124, 0.75)' : 'none' }}
                                onClick={() => {::this.getMusicWithCategory(elem.name)}}
                            >
                                {elem.name}
                            </button>
                        );
                    })}
                </div>
                <Body artists={this.state.newTag === '' ? this.props.artistsToBody.artist : this.state.newTag.artist} />
            </div>
        );
    }
}

export default Category;