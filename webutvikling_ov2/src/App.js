import React, { Component } from 'react';
import {render} from "react-dom";
import './App.css';
import Tabs from './Tabs';
import kunst2 from './alphachannel.svg';
import kunst1 from './atom.svg';
import sound from './rain.mp3';


require('./styles.css');

class App extends Component {
  constructor (){
    super();
    this.state = {
      
      image1: '',
      audio1: '',
      text1: '',
      image2: '',
      audio2: '',
      text2: '',
      image3: '',
      audio3: '',
      text3: '',
      image4: '',
      audio4: '',
      text4: '',

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    console.log("clicked!");
    fetch('./atom.svg')
      // .then(response => response.blob())
      .then(image => {
        // let outside = URL.createObjectURL(image)
        this.state.image1 = image
        // console.log(outside)
        console.log(this.state.image1 + " hey")
      })
    // let xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function(){
    //   if (this.readyState == 4 && this.status == 200){
    //     document.getElementById("k2").innerHTML = this.responseXML;
    //   }
    //   xhttp.open("GET", "atom.svg", true);
    //   xhttp.send();
    // }
  }

  render() {
    return (
      <div label="App">
        <Tabs>
          <div label="kunst1">
            <button type="button" onClick={this.handleClick}>get Art</button>
            {/* <img src={kunst1} /> */}
            <img src={this.state.image1}/>
          </div>
          <div label="kunst2" id="k2">
            <button type="button" onClick={this.handleClick}>get Art</button>
            {/* <img src={kunst2} />
            <audio autoplay src={sound}></audio> */}
          </div>
          <div label="kunst3">
            kunst3
          </div>
          <div label="kunst4">
            kunst4
          </div>
        </Tabs>
      </div>
    );
  }
}

// function loadDoc(){
//   console.log("clicked!")
//   let xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function(){
//     if (this.readyState == 4 && this.status == 200){
//       document.getElementById("k2").innerHTML = this.responseXML;
//     }
//     xhttp.open("GET", "atom.svg", true);
//     xhttp.send();
//   }

// }
const container = document.createElement('div');
document.body.appendChild(container);



export default App;
