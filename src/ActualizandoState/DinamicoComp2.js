import React, { Component } from 'react';

export default class DinamicoComp2 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      primero: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        primero : 2})
    }, 3000);
      
  }

  render() {
    let backgroundStyle = {
      padding: 50,
      width: 250,
      height: 100,
      borderRadius: 10,
      fontSize: 30,
      textAlign: "center"
    };

    return (
      <div style={backgroundStyle}>    
          {this.state.primero}
      </div>
    );
  }
}