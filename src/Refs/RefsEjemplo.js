import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

export default class RefsEjemplo extends React.Component {
    constructor() {
        super();
        // Creamos una Ref
        this.refran = React.createRef();
        this.state = { frase: ""};
        
    }

    update(e) {
        this.setState({frase: this.refran.current.value.toUpperCase()});
    }

    render() {
        return (
            <Jumbotron>
                Ponme un refrán: <input type="text" ref={this.refran} onChange={this.update.bind(this)} />
                <Button variant="primary">{this.state.frase} </Button>
            </Jumbotron>
        )
    }
}