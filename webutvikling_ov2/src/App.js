import React, { Component } from 'react';
import {render} from "react-dom";
import './App.css';
import Tabs from './Tabs';
import kunst1 from './Pictures/animal1.svg';
import kunst2 from './Pictures/animal2.svg';
import kunst3 from './Pictures/animal3.svg';
import kunst4 from './Pictures/animal4.svg';

import sound1 from './Sounds/technosound1.mp3';
import sound2 from './Sounds/technosound2.mp3';
import sound3 from './Sounds/technosound3.mp3';
import sound4 from './Sounds/technosound4.mp3';
import Grid from 'react-css-grid';





require('./styles.css');



class App extends Component {

  playPause() {
    var play = document.getElementById("playButton");
    var pause = document.getElementById("pauseButton");
    var song = document.getElementById('song');
    if (play.style.display === "none") {
      play.style.display = "block";
      pause.style.display = "none";
      song.pause();
    } else {
      play.style.display = "none";
      pause.style.display = "block";
      song.play();
    }
  }

  render() {
    return (
      <div label="App" className="App">
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </header>
        {/*<Grid width={1000} gap={300}>*/}
        {/*<div className="grid-container">*/}
        <div className="grid-containerSuper">
        <div className="superGrid-item1">
          <Tabs>

            <div label="kunst1">
              <div className="grid-container">
                <div className="grid-item1">
                  <label>play/pause</label>
                  <svg width="25px" height="25px">
                    <polygon id="playButton" class="toggleButton" onClick={() => this.playPause()} points="0,0 25,12 0,24" fill="#2BB334" />
                    <g id="pauseButton" class="toggleButton" onClick={() => this.playPause()}>
                      <rect width="25" height="6" x="0" y="4" fill="red" />
                      <rect width="25" height="6" x="0" y="14" fill="red" />
                    </g>
                  </svg>
                  <audio id="song" loop src={sound1}></audio>
                </div>
                <p className="grid-item2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="grid-item3">
                  <img src={kunst1} className="pic" alt="art" />
                </div>
              </div>
            </div>

            {/* tab2 */}
            <div label="kunst2">
              <div className="grid-container">
                <div className="grid-item1">
                  <label>play/pause</label>
                  <svg width="25px" height="25px">
                    <polygon id="playButton" class="toggleButton" onClick={() => this.playPause()} points="0,0 25,12 0,24" fill="#2BB334" />
                    <g id="pauseButton" class="toggleButton" onClick={() => this.playPause()}>
                      <rect width="25" height="6" x="0" y="4" fill="red" />
                      <rect width="25" height="6" x="0" y="14" fill="red" />
                    </g>
                  </svg>
                  <audio id="song" loop src={sound2}></audio>
                </div>
                <p className="grid-item2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="grid-item3">
                  <img src={kunst2} className="pic" alt="art" />
                </div>
              </div>
            </div>

            {/* tab3 */}
            <div label="kunst3">
              <div className="grid-container">
                <div className="grid-item1">
                  <label>play/pause</label>
                  <svg width="25px" height="25px">
                    <polygon id="playButton" class="toggleButton" onClick={() => this.playPause()} points="0,0 25,12 0,24" fill="#2BB334" />
                    <g id="pauseButton" class="toggleButton" onClick={() => this.playPause()}>
                      <rect width="25" height="6" x="0" y="4" fill="red" />
                      <rect width="25" height="6" x="0" y="14" fill="red" />
                    </g>
                  </svg>
                  <audio id="song" loop src={sound3}></audio>
                </div>
                <p className="grid-item2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="grid-item3">
                  <img src={kunst3} className="pic" alt="art" />
                </div>
              </div>
            </div>

            {/* tab 4 */}
            <div label="kunst4">
              <div className="grid-container">
                <div className="grid-item1">
                  <label>play/pause</label>
                  <svg width="25px" height="25px">
                    <polygon id="playButton" class="toggleButton" onClick={() => this.playPause()} points="0,0 25,12 0,24" fill="#2BB334" />
                    <g id="pauseButton" class="toggleButton" onClick={() => this.playPause()}>
                      <rect width="25" height="6" x="0" y="4" fill="red" />
                      <rect width="25" height="6" x="0" y="14" fill="red" />
                    </g>
                  </svg>
                  <audio id="song" loop src={sound4}></audio>
                </div>
                <p className="grid-item2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="grid-item3">
                  <img src={kunst4} className="pic" alt="art" />
                </div>
              </div>
            </div>

          </Tabs>
        </div>

          <div className="superGrid-item2">
            <div id="radioBoxes" className="grid-item4">
              <form className="radioForm">
                <label>Bilde</label>
                <label><input type="radio" checked name="gender" value="1" /> Alternativ 1</label>
                <label><input type="radio" name="gender" value="2" /> Alternativ 2</label>
                <label><input type="radio" name="gender" value="3" /> Alternativ 3</label>
              </form>
              <form className="radioForm">
                <label>Lyd</label>
                <label><input type="radio" checked name="gender" value="1"  /> Alternativ 1</label>
                <label><input type="radio" name="gender" value="2" /> Alternativ 2</label>
                <label><input type="radio" name="gender" value="3" /> Alternativ 3</label>
              </form>
              <form className="radioForm">
                <label>Tekst</label>
                <label><input type="radio" checked name="gender" value="1"  /> Alternativ 1</label>
                <label><input type="radio" name="gender" value="2" /> Alternativ 2</label>
                <label><input type="radio" name="gender" value="3" /> Alternativ 3</label>
              </form>
            </div>
          </div>   
        </div>
        {/*</div>  */}
        {/*</Grid>*/}
      </div>
    );
  }
}



const container = document.createElement('div');
document.body.appendChild(container);



export default App;
