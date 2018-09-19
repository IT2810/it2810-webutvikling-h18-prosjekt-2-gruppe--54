import React, { Component } from 'react';
import {render} from "react-dom";
import './App.css';
import Tabs from './Tabs';
import kunst2 from './alphachannel.svg';
import kunst1 from './atom.svg';
import sound from './rain.mp3';


require('./styles.css');

class App extends Component {
  render() {
    return (
      <div label="App">
        <Tabs>
          <div label="kunst1">
          <img src={kunst1} />
          </div>
          <div label="kunst2">
            <img src={kunst2} />
            <audio autoplay src={sound}></audio>
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

const container = document.createElement('div');
document.body.appendChild(container);



export default App;
