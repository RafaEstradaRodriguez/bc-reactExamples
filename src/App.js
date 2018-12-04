import React, { Component } from 'react';
import './App.css';
import Circulo from './Circulo';

class App extends Component {
  
  render() {
    return (
      <Circulo bgColor="#F9C240" />
    );
  }
}

// class App extends Component {
  
//   render() {
//     var miCirculo = <Circulo bgColor="#F9C240" />;
//     return (
//       <div>
//         {miCirculo}
//       </div>
//     );
//   }
// }

// class App extends Component {
//   mostrarCirculo() {
//     var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
//     var ran = Math.floor(Math.random() * colors.length);
//     return <Circulo bgColor={colors[ran]} />;
//   }
//   render() {
//     return (
//       <div>
//         {this.mostrarCirculo()}
//       </div>
//     );
//   }
// }

// class App extends Component {
//   mostrarCirculo() {
//     var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
//     var ran = Math.floor(Math.random() * colors.length);
//     return <Circulo bgColor={colors[ran]} />;
//   }
//   render() {
//     return (
//       <div>
//         {this.mostrarCirculo()}
//         {this.mostrarCirculo()}
//         {this.mostrarCirculo()}
//         {this.mostrarCirculo()}
//       </div>
//     );
//   }
// }

// class App extends Component {

//   render() {
//     var colData = [];

//     var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
//     "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
//     for (var i = 0; i < colors.length; i++) {
//       colData.push(<Circulo key={i + colors[i]} bgColor={colors[i]} />);
//     }

//     return (
//       <div>
//         {colData}
//       </div>
//     );
//   }
// }

// class App extends Component {
//   lista = ['Primero', 'Segundo', 'Tercero'];
//   render() {
    

//     return (
//       <div>
//         {this.lista.map(i => <li key={i}>{i}</li>)}
//       </div>
//     );
//   }
// }

// class App extends Component {
//   lista = {
//     id: 3422,
//     nombre: "Jorge",
//     nacionalidad: "Española"
//   };
//   render() {
    

//     return (
//       <div>
//         {Object.keys(this.lista).map(i => (
//         <li key={i}>
//           <strong>{i}: </strong>
//           {this.lista[i]}
//         </li>
//       ))}
//       </div>
//     );
//   }
// }

// const App = (props) => {
//   return (
//     <h1>Titulo</h1>
//     )
// }

export default App;
