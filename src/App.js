import React, { Component } from 'react';
import img from './collier.jpg';
import './App.css';

const divStyle = {
  backgroundImage: `url(${img})`,
  backgroundSize:'cover',
  width: "100%",
  paddingTop: "5%",
  paddingBottom: "2%",
 }

class App extends Component {
  render() {
    return (
      <div style={divStyle}>
          <h1 id="Texte">La Maison Des Artistes</h1>
          <h1 id="Texte2">La Maison des Artistes</h1>
      </div>
    );
  }
}

export default App;
