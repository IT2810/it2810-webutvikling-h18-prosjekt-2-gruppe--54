import React, { Component } from 'react';
import {render} from "react-dom";
import './App.css';
import Tabs from './Tabs';
import kunst2 from './Pictures/animal2.svg';
import kunst1 from './Pictures/animal3.svg';
import sound1 from './Sounds/technosound1.mp3';
import sound2 from './Sounds/technosound2.mp3';
import sound3 from './Sounds/technosound3.mp3';
import sound4 from './Sounds/technosound4.mp3';
import Grid from 'react-css-grid';




require('./styles.css');



class App extends Component {


  render() {
    return (
      <div label="App">
        <Grid width={320} gap={100}>
        <div>
        <Tabs>
            <div label="kunst1">
            <img src={kunst1} />
            <audio autoPlay loop src={sound1}></audio>
            </div>
            <div label="kunst2">
              <img src={kunst2} />
              <audio autoPlay loop src={sound2}></audio>
            </div>
            <div label="kunst3">
              kunst3
            </div>
            <div label="kunst4">
              kunst4
            </div>
          </Tabs>
        </div>
        <div>
         Checkboxes          
        </div>     
        
        
        
        </Grid>
      </div>
    );
  }
}

const container = document.createElement('div');
document.body.appendChild(container);



export default App;
