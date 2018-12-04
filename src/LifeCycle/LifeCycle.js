import React, { Component } from 'react';
import {ContadorHijo} from '../Eventos/Contador';
import ReactDOM from 'react-dom';

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
 
    console.log("constructor: Inicializando el State");
 
    this.state = {
      count: 0
    };
 
    this.increase = this.increase.bind(this);
  }
 
  increase() {
    this.setState({
      count: this.state.count + 1
    });
  }
 
  componentWillUpdate(newProps, newState) {
    console.log("componentWillUpdate: El componente se va a actualizar!");
  }
 
  componentDidUpdate(currentProps, currentState) {
    console.log("componentDidUpdate: El componente se ha actualizado!");
  }
 
  componentWillMount() {
    console.log("componentWillMount: El componente se va a inicializar!");
  }
 
  componentDidMount() {
    console.log("componentDidMount: El componente se ha inicializado!");
  }
 
  componentWillUnmount() {
    console.log("componentWillUnmount: El componente va a borrarse del DOM!");
  }
 
  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate: Debería actualizarme?");
 
    if (newState.count < 5) {
      console.log("shouldComponentUpdate: Debo actualizarme!");
      return true;
    } else {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'));
      console.log("shouldComponentUpdate: No debo actualizarme!");
      return false;
    }
  }
 
  componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps: El componente recibe nuevos atributos!");
  }
 
  render() {
    var backgroundStyle = {
      padding: 50,
      border: "#333 2px dotted",
      width: 250,
      height: 100,
      borderRadius: 10,
      textAlign: "center"
    };
 
    return (
      <div style={backgroundStyle}>
        <ContadorHijo display={this.state.count} />
        <button onClick={this.increase}>
          +
        </button>
      </div>
    );
  }
}
 
