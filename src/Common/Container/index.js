import React, { Component } from 'react';
import data from './data';
import List from '../List';

class ContainerForm extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            dataProcessed: data
        };

    }
    handleChange (event) {
        this.setState({
            value: event.target.value
        });
    };
    addTodo () {
        if(this.state.value !== ''){
            this.state.dataProcessed.push({
                id: (() => Math.random().toString(36).substr(2, 9))(),
                name: this.state.value
            });
            this.setState({
                value: ''
            })
        }
    };
    deleteItem (id) {
        this.setState({
            dataProcessed: this.state.dataProcessed.filter(elem => elem.id !== id)
        });
    };
    render() {
        return(
            <div>
                <p>{this.props.title}</p>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={::this.handleChange}
                />
                <button
                    onClick={::this.addTodo}
                    style={{
                        backgroundColor: 'green',
                        border: 'none'
                    }}
                >
                    {this.props.buttonTitle}
                </button>
                {this.state.dataProcessed.length !== 0 && this.state.dataProcessed.map((elem, index) => {
                    return(
                        <List
                            key={index}
                            indexItem={index + 1}
                            dataText={elem.name}
                            id={elem.id}
                            onDelete={::this.deleteItem}
                            deleteBtnText={`Delete`}
                        />
                    );
                })}
            </div>
        );
    }
}

export default ContainerForm;