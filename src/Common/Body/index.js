import React, { Component } from 'react';
import styles from './style.scss';
import Modal from '../Modal';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import IndividualSingerTrack from '../IndividualSingerTrack';


class Body extends Component {
    constructor() {
        super();
        this.state = {
            renderData: '',
        };
    }
    loginFunc(e) {
        if(e.target.nextElementSibling.className === 'like'){
            e.target.nextElementSibling.className = 'active-like';
            e.target.src = `https://d30y9cdsu7xlg0.cloudfront.net/png/52944-200.png`;
        } else if (e.target.nextElementSibling.className === 'active-like') {
            e.target.nextElementSibling.className = 'like';
            e.target.src = `https://image.flaticon.com/icons/png/128/148/148836.png`;
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            renderData: nextProps.artists && nextProps.artists
        });
    }
    render() {
        return(
            <div
                className={`contain`}
                style={{
                    backgroundColor: '#f4f4f4',
                    paddingTop: '10px'
                }}
            >
                <div className={`container`}>
                    <div className={`generalContainer`}>
                        {this.state.renderData && this.state.renderData.map((elem, index) => {
                            return (
                                <div
                                    className={`subContainer`}
                                    key={index}
                                >
                                    <div className={`image-wrapper`}>
                                        <img
                                            src={`${elem.image[3]['#text']}`}
                                            width={190}
                                            height={190}
                                            className={`blur_image`}
                                        />
                                    </div>
                                    <div
                                        className={`blur-item`}
                                    >
                                        {elem.name}
                                    </div>
                                    <div className={`subContainer-image`}>
                                        <img
                                            src={`https://cdn4.iconfinder.com/data/icons/sibcode-line-simple/512/right-512.png`}
                                            width={30}
                                            height={30}
                                            style={{
                                                display: 'block',
                                                marginRight: 10
                                            }}
                                        />
                                        {/* Link */}
                                        <p className={`subContainer-text`}>
                                            {elem.artist ? elem.artist : elem.name}
                                        </p>
                                        <Router>
                                            <Route path={`/singers/singer`} component={IndividualSingerTrack}/>
                                        </Router>
                                        <Link to={`/singers/singer/${elem.name.replace(' ', '').toLowerCase().replace('-', '')}`}>GO!</Link>
                                        {/* Link */}
                                        <img
                                            onClick={(e) => {::this.loginFunc(e)}}
                                            src={`https://image.flaticon.com/icons/png/128/148/148836.png`}
                                            width={17}
                                            height={17}
                                            style={{
                                                position: 'absolute',
                                                opacity: .4,
                                                left: 170,
                                                cursor: 'pointer'
                                            }}
                                        />
                                        <div className={`like`}>
                                            <div
                                                style={{ display: 'block' }}
                                                className={`login-block`}
                                            >
                                                <a
                                                    href={`https://secure.last.fm/login`}
                                                    className={`linkToLogin`}
                                                >
                                                    Sign into Last.FM
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;