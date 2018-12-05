import React, { Component } from "react";
 
class Contacto extends Component {
  render() {
    return (
      <div>
        <h2>CONTACTA CON NOSOTROS</h2>
        <p>Puedes enviarnos tus dudas a nuestra {this.props.match.params.location}.
        </p>
      </div>
    );
  }
}
 
export default Contacto;