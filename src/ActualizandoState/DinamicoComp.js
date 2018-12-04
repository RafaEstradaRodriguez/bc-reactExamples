import React, { Component } from 'react';

export default class DinamicoComp extends Component {
  
  primero = 0;

  componentDidMount() {
    //console.log("entro");
    setTimeout(() => {
        this.primero = 2;
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
          {this.primero}
      </div>
    );
  }
}