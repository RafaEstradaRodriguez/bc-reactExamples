import React, { Component } from 'react';

export default class InitialState extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      primero: true,
      segundo: false
    };
  }

  
  componentDidMount() {
    
    setTimeout(() => {
      this.setState({
        primero: false,
        segundo: true
      });
    }, 3000);
      
  }

  render() {

    const { primero, segundo } = this.state;
    
    return (
      <div>    
          <button disabled={primero}>Boton primero</button>
          <button disabled={segundo}>Boton segundo</button>
      </div>
    );
  }
}