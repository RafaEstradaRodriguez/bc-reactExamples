import React, { Component } from 'react';

class Film extends React.Component {
    render() {
      return (
        <div >
            <img src={this.props.img}/>
            { this.props.isHovering && <p>Hola</p> }
        </div>
      );
    }
}

const Bio = (props) => {
    return (
        <p>{props.txt}</p>
    )
}

export default class FilmHover extends Component {
    imgUrls = [
        "/img/blade_runner.jpg", 
        "/img/casablanca.jpg",
        "/img/golpe_pequena_china.jpg"
    ];

    imgBios = [
        "En un lugar de la mancha"
    ]

    constructor(props) {
        super(props);

        this.state = {
            idx:0,
            isHovering: false,
        };

        this.handleMouseHover = this.handleMouseHover.bind(this);

    }

  handleMouseHover() {
    this.setState({
      isHovering: !this.state.isHovering
    });
  }

  render() {
    return (
      <div>
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <Film isHovering={this.state.isHovering} img={this.imgUrls[this.state.idx]} />
        </div>
        { 
            this.state.isHovering &&
           <Bio txt={this.imgBios[this.state.idx]} />
        }
      </div>
    );
  }
}

