import React, { Component } from 'react';
import {render} from "react-dom";
import './App.css';
import Tabs from './Tabs';
import Grid from 'react-css-grid';
import poems from './Poems/poems.json';




require('./styles.css');



class App extends Component {

  constructor() {
    super();
    
    this.state = {
      soundTheme: "", //type musikk som spilles av i de forskjellige tabbene
      textTheme: "", //type dikt som vises i de forskjellige tabbene
      artTheme: "", //type bilde som vises i de forskjellige tabbene

      bilde: "", //bildet som vises i tab 1
      lyd: "", //sangen som spilles i tab 1
      dikt: "", //diktet som vises i tab 1

      bilde2: "", //bildet som vises i tab 2
      lyd2: "", //sangen som spilles i tab 2
      dikt2: "", //diktet som vises i tab 2

      bilde3: "", //bildet som vises i tab 3
      lyd3: "", //sangen som spilles i tab 3
      dikt3: "", //diktet som vises i tab 3

      bilde4: "", //bildet som vises i tab 4
      lyd4: "", //sangen som spilles i tab 4
      dikt4: "", //diktet som vises i tab 4
    };
    
    this.handleMusicChange = this.handleMusicChange.bind(this);
    this.handleArtChange = this.handleArtChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.setState = this.setState.bind(this);
    this.getArtUrl = this.getArtUrl.bind(this);
    this.getSoundUrl = this.getSoundUrl.bind(this);
    this.getPoemUrl = this.getPoemUrl.bind(this);
    this.getPoem = this.getPoem.bind(this);
  }
  
  
  getArtUrl(number) {
    var artUrls = ['/Pictures/animal1.svg',
                  '/Pictures/animal2.svg',
                  '/Pictures/animal3.svg',
                  '/Pictures/animal4.svg',
                  '/Pictures/love1.svg',
                  '/Pictures/love2.svg',
                  '/Pictures/love3.svg',
                  '/Pictures/love4.svg',
                  '/Pictures/tech1.svg',
                  '/Pictures/tech2.svg',
                  '/Pictures/tech3.svg',
                  '/Pictures/tech4.svg'  
                  ]
    return artUrls[number];
  }

  getSoundUrl(number) {
    var soundUrls = ['/Sounds/guitarsound1.mp3',
                  '/Sounds/guitarsound2.mp3',
                  '/Sounds/guitarsound3.mp3',
                  '/Sounds/guitarsound4.mp3',
                  '/Sounds/pianosound1.mp3',
                  '/Sounds/pianosound2.mp3',
                  '/Sounds/pianosound3.mp3',
                  '/Sounds/pianosound4.mp3',
                  '/Sounds/technosound1.mp3',
                  '/Sounds/technosound2.mp3',
                  '/Sounds/technosound3.mp3',
                  '/Sounds/technosound4.mp3'  
                  ]
    return soundUrls[number];
  }

  getPoemUrl(number) {
    var poemUrls = ['/Poems/artpoem1.json',
                  '/Poems/artpoem2.json',
                  '/Poems/artpoem3.json',
                  '/Poems/artpoem4.json',
                  '/Poems/lovepoem1.json',
                  '/Poems/lovepoem2.json',
                  '/Poems/lovepoem3.json',
                  '/Poems/lovepoem4.json',
                  '/Poems/naturepoem1.json',
                  '/Poems/naturepoem2.json',
                  '/Poems/naturepoem3.json',
                  '/Poems/naturepoem4.json'  
                  ]
    return poemUrls[number];
  }

  
  getPoem(number) {
    var url = this.getPoemUrl(number);
    var dikt = "";
    return fetch(url)
    .then(response => response.json())
    .then(data => {return data.dikt});
  }

  //kjøres når man velger musikk-type
  handleMusicChange(event) {
    this.setState({
      soundTheme: event.target.value
    }, function() {

        if (this.state.soundTheme == "guitar") {
          this.setState({
            lyd: this.getSoundUrl(0),
            lyd2: this.getSoundUrl(1),
            lyd3: this.getSoundUrl(2),
            lyd4: this.getSoundUrl(3)
          })
        }
        else if (this.state.soundTheme == "piano") {
          this.setState({
            lyd: this.getSoundUrl(4),
            lyd2: this.getSoundUrl(5),
            lyd3: this.getSoundUrl(6),
            lyd4: this.getSoundUrl(7)
          })
        }
        else if (this.state.soundTheme == "techno") {
          this.setState({
            lyd: this.getSoundUrl(8),
            lyd2: this.getSoundUrl(9),
            lyd3: this.getSoundUrl(10),
            lyd4: this.getSoundUrl(11)
          })
        }       
      }

    );
  };

  //kjøres når man velger bilde-type
  handleArtChange(event) {
    this.setState({
      artTheme: event.target.value
    }, function() {
        if (this.state.artTheme == "animal") {
          this.setState({
            bilde: this.getArtUrl(0),
            bilde2: this.getArtUrl(1),
            bilde3: this.getArtUrl(2),
            bilde4: this.getArtUrl(3)
          })
          
        }
        else if (this.state.artTheme == "love") {
          this.setState({
            bilde: this.getArtUrl(4),
            bilde2: this.getArtUrl(5),
            bilde3: this.getArtUrl(6),
            bilde4: this.getArtUrl(7)
          })
        }
        else if (this.state.artTheme == "technology") {
          this.setState({
            bilde: this.getArtUrl(8),
            bilde2: this.getArtUrl(9),
            bilde3: this.getArtUrl(10),
            bilde4: this.getArtUrl(11)
          })
        }        
      }

    );
  };

  //kjøres når man velger dikt-type
  handleTextChange(event) {
    this.setState({
      textTheme: event.target.value
    }, function() {

      if (this.state.textTheme == "art") {
        this.getPoem(0).then(response => this.setState({
          dikt: response
        }))
        this.getPoem(1).then(response => this.setState({
          dikt2: response
        }))
        this.getPoem(2).then(response => this.setState({
          dikt3: response
        }))
        this.getPoem(3).then(response => this.setState({
          dikt4: response
        }))
      }
      else if (this.state.textTheme == "love") {
        this.getPoem(4).then(response => this.setState({
          dikt: response
        }))
        this.getPoem(5).then(response => this.setState({
          dikt2: response
        }))
        this.getPoem(6).then(response => this.setState({
          dikt3: response
        }))
        this.getPoem(7).then(response => this.setState({
          dikt4: response
        }))
      }
      else if (this.state.textTheme == "nature") {
        this.getPoem(8).then(response => this.setState({
          dikt: response
        }))
        this.getPoem(9).then(response => this.setState({
          dikt2: response
        }))
        this.getPoem(10).then(response => this.setState({
          dikt3: response
        }))
        this.getPoem(11).then(response => this.setState({
          dikt4: response
        }))
      }
    });
  };






  playPause() {
    if(this.state.soundTheme.length < 1) {
      alert("Please select a song category!");
      return;
    }
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
                    <polygon id="playButton" className="toggleButton" onClick={() => this.playPause()} points="0,0 25,12 0,24" fill="#2BB334" />
                    <g id="pauseButton" className="toggleButton" onClick={() => this.playPause()}>
                      <rect width="25" height="6" x="0" y="4" fill="red" />
                      <rect width="25" height="6" x="0" y="14" fill="red" />
                    </g>
                  </svg>
                  <audio id="song" loop src={this.state.lyd}></audio>
                </div>
                <p className="grid-item2" id="par1">
                  {this.state.dikt}
                </p>
                <div className="grid-item3">
                  <img src={this.state.bilde} className="pic" alt="Select a category to load an image." />
                </div>
              </div>
            </div>

            {/* tab2 */}
            <div label="kunst2">
              <div className="grid-container">
                <div className="grid-item1">
                  <label>play/pause</label>
                  <svg width="25px" height="25px">
                    <polygon id="playButton" className="toggleButton" onClick={() => this.playPause()} points="0,0 25,12 0,24" fill="#2BB334" />
                    <g id="pauseButton" className="toggleButton" onClick={() => this.playPause()}>
                      <rect width="25" height="6" x="0" y="4" fill="red" />
                      <rect width="25" height="6" x="0" y="14" fill="red" />
                    </g>
                  </svg>
                  <audio id="song" loop src={this.state.lyd2}></audio>
                </div>
                <p className="grid-item2">
                {this.state.dikt2}
                </p>
                <div className="grid-item3">
                  <img src={this.state.bilde2} className="pic" alt="Select a category to load an image." />
                </div>
              </div>
            </div>

            {/* tab3 */}
            <div label="kunst3">
              <div className="grid-container">
                <div className="grid-item1">
                  <label>play/pause</label>
                  <svg width="25px" height="25px">
                    <polygon id="playButton" className="toggleButton" onClick={() => this.playPause()} points="0,0 25,12 0,24" fill="#2BB334" />
                    <g id="pauseButton" className="toggleButton" onClick={() => this.playPause()}>
                      <rect width="25" height="6" x="0" y="4" fill="red" />
                      <rect width="25" height="6" x="0" y="14" fill="red" />
                    </g>
                  </svg>
                  <audio id="song" loop src={this.state.lyd3}></audio>
                </div>
                <p className="grid-item2">
                {this.state.dikt3}
                </p>
                <div className="grid-item3">
                  <img src={this.state.bilde3} className="pic" alt="Select a category to load an image." />
                </div>
              </div>
            </div>

            {/* tab 4 */}
            <div label="kunst4">
              <div className="grid-container">
                <div className="grid-item1">
                  <label>play/pause</label>
                  <svg width="25px" height="25px">
                    <polygon id="playButton" className="toggleButton" onClick={() => this.playPause()} points="0,0 25,12 0,24" fill="#2BB334" />
                    <g id="pauseButton" className="toggleButton" onClick={() => this.playPause()}>
                      <rect width="25" height="6" x="0" y="4" fill="red" />
                      <rect width="25" height="6" x="0" y="14" fill="red" />
                    </g>
                  </svg>
                  <audio id="song" loop src={this.state.lyd4}></audio>
                </div>
                <p className="grid-item2">
                {this.state.dikt4}
                </p>
                <div className="grid-item3">
                  <img src={this.state.bilde4} className="pic" alt="Select a category to load an image." />
                </div>
              </div>
            </div>

          </Tabs>
        </div>

          <div className="superGrid-item2">
            <div id="radioBoxes" className="grid-item4">
              <form className="radioForm">
                <label>Bilde</label>
                <label><input type="radio" name="imgRadio" checked={this.state.artTheme === "animal"}  value="animal" onChange={this.handleArtChange} /> Animal</label>
                <label><input type="radio" name="imgRadio" checked={this.state.artTheme === "love"}  value="love" onChange={this.handleArtChange} /> Love</label>
                <label><input type="radio" name="imgRadio" checked={this.state.artTheme === "technology"}  value="technology" onChange={this.handleArtChange} /> Technology</label>
              </form>
              <form className="radioForm">
                <label>Lyd</label>
                <label><input type="radio" name="soundRadio" checked={this.state.soundTheme === "guitar"}  value="guitar" onChange={this.handleMusicChange}/> Guitar</label>
                <label><input type="radio" name="soundRadio" checked={this.state.soundTheme === "piano"}  value="piano" onChange={this.handleMusicChange}/> Piano</label>
                <label><input type="radio" name="soundRadio" checked={this.state.soundTheme === "techno"}  value="techno" onChange={this.handleMusicChange}/> Techno</label>
              </form>
              <form className="radioForm">
                <label>Tekst</label>
                <label><input type="radio" name="txtRadio" checked={this.state.textTheme === "art"}  value="art"  onChange={this.handleTextChange}/> Art</label>
                <label><input type="radio" name="txtRadio" checked={this.state.textTheme === "love"}  value="love" onChange={this.handleTextChange}/> Love</label>
                <label><input type="radio" name="txtRadio" checked={this.state.textTheme === "nature"}  value="nature" onChange={this.handleTextChange}/> Nature</label>
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
