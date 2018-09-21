import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'




class App extends Component {
  constructor (){
    super();
    this.state = {
      username: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log("success");
    axios.get("./logo.svg")
      .then(response => this.setState({username: "bill"}))
  }
  

  
  render() {
    return (
      <div className="button_container">
        <button className="button" onClick={() => this.handleClick()}>Click me </button>
        <p>{this.state.username}</p>
      </div>
    );
  }
}



export default App;
