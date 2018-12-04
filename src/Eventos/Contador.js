import React, { Component } from 'react';

export class ContadorHijo extends React.Component {
  render() {
    var textStyle = {
      fontSize: 72,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold"
    };
 
    return (
      <div style={textStyle}>
        {this.props.display}
      </div>
    );
  }
}
 
export default class Contador extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      count: 0
    };

    this.sumar = this.sumar.bind(this);
  }

  sumar(e) {
    this.setState({
      count: this.state.count + 1
    });
  }
  
 
  render() {
    var backgroundStyle = {
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 250,
      height: 100,
      borderRadius: 10,
      textAlign: "center"
    };
    var buttonStyle = {
      fontSize: "1em",
      width: 30,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      lineHeight: "3px"
    };
 
    return (
      <div style={backgroundStyle}>
        <ContadorHijo display={this.state.count} />
        <button onClick={this.sumar} style={buttonStyle}>+</button>
      </div>
    );
  }
}