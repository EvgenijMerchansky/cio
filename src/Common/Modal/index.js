import React, { Component } from 'react';
import styles from './style.scss';

class Modal extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div
                style={{ display: this.props.modal ? 'block' : 'none' }}
                className={`login-block`}
            >
                <a
                    href={`https://secure.last.fm/login`}
                    className={`linkToLogin`}
                >
                    Sign into Last.FM
                </a>
            </div>
        );
    }
}

export default Modal;