import React, { Component } from 'react';
import styles from './style.scss';

class Body extends Component {
    constructor() {
        super();
        this.state = {
            renderData: '',
        };
    }
    favourite() {
        console.log('work');
    };
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
                                        <p className={`subContainer-text`}>
                                            {elem.artist ? elem.artist : elem.name}
                                        </p>
                                        <img
                                            onClick={::this.favourite}
                                            className={`like`}
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