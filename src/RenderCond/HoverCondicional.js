import React, { Component } from 'react';

export default class HoverExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
          Pasa por encima
        </div>
        { this.state.isHovering &&
           <div>Soy un texto condicionado! </div>
        }
      </div>
    );
  }
}

