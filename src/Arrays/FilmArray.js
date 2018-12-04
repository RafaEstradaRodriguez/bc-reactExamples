import React, { Component } from 'react';

class Film extends React.Component {
    render() {
      return (
        <div >
          <img src={this.props.img}/>
        </div>
      );
    }
}

class Pasador extends React.Component {
    render() {
      return (
        <button onClick={this.props.clickHandler}>
          Pasar
        </button>
      )
    }
}

export default class FilmArray extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          idx: 0
        };
    
        this.pasar = this.pasar.bind(this);
    }

    imgUrls = [
        "/img/blade_runner.jpg", 
        "/img/casablanca.jpg",
        "/img/golpe_pequena_china.jpg"
    ];
    
    pasar(e) {
        this.setState({
          idx: this.state.idx < this.imgUrls.length - 1 ? this.state.idx + 1 : 0
        });
    }

    render() {
     
        return (
          <div >
            <Film img={this.imgUrls[this.state.idx]} />
            <Pasador clickHandler={this.pasar} />
          </div>
        );
    }

}
