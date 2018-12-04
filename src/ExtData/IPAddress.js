import React, { Component } from 'react';
import './IPAddress.css';

var xhr;

export default class IPAddress extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          ip_address: "..."
        };
     
        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json", true);
        xhr.send();
     
        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest() {
        console.log(xhr);
        if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
     
          this.setState({
            ip_address: response.ip
          });
        }
    }

    render() {

        return (
            <div>
                <h1>{this.state.ip_address}</h1>
                <h2>Esta es tu dirección IP</h2>
            </div>
        );
    }
 
  }