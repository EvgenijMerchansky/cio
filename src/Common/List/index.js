import React, { Component } from 'react';

class List extends Component {
    currentDelete() {
        this.props.onDelete(this.props.id);
    };
    render(){
        return(
            <div>
                <h1>{`${this.props.indexItem}.`}</h1>
                <p>{this.props.dataText}</p>
                <button onClick={::this.currentDelete}>
                    {this.props.deleteBtnText}
                </button>
            </div>
        );
    }
}

export default List;