import React from 'react';
import './App.css';
import './Footer.css';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet"></link>
      <header className="App-header">
          <div style={{cellheader}}>
            <img className="iconSocial" src="https://img.icons8.com/fluent-systems-filled/24/000000/facebook-new.png"/>
            <img className="iconSocial" src="https://img.icons8.com/fluent-systems-filled/24/000000/twitter.png"/>
            <img className="iconSocial" src="https://img.icons8.com/fluent-systems-filled/24/000000/linkedin.png"/>
          </div>
          <div style={{cellheader}}>
            <p> <span style={{fontWeight: 'bolder', fontSize: '40px',}}>GaZette</span> <br/> <span style={{fontSize:'15px',}}>STEM </span></p>
          </div>
          <div style={{cellheader}}>
            <p> Search icon</p>
          </div>
      </header>
      <header className="App-nav">
        <div className="App-nav-in">
          <div style={{navCell}}>
            <p> Anouncements</p>
          </div>
          <div style={{navCell}}>
            <p> |</p>
          </div>
          <div style={{navCell}}>
            <p> Awards </p>
          </div>
          <div style={{navCell}}>
            <p> |</p>
          </div>
          <div style={{navCell}}>
            <p> News</p>
          </div>
          <div style={{navCell}}>
            <p> |</p>
          </div>
          <div style={{navCell}}>
            <p> Competitions</p>
          </div>
          <div style={{navCell}}>
            <p> |</p>
          </div>
          <div style={{navCell}}>
            <p> Interns</p>
          </div>
          <div style={{navCell}}>
            <p> |</p>
          </div>
          <div style={{navCell}}>
            <p>Admitted</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

const cellheader = {
  color: 'black',
}

const navCell = {
  margin: 40,
}