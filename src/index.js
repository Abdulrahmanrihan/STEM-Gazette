import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div className="slider"> 
      <img style={{width:"100%",}} src="https://via.placeholder.com/1000x360"/>
    </div>

    <div className="cardsFilter">
      <div className="cardsFilterIn">
        
        <p className="cardsFilterItems">ALL</p>
        <p className="cardsFilterItems">Competitions</p>
        <p className="cardsFilterItems">Internship</p>
        <p className="cardsFilterItems">Programs</p>

        <button className="cardsFilterButton">Program of the week</button>
      </div>
    </div>

    <div className="cards">
      <div className="row">
        <div className="card">
          <img src="https://via.placeholder.com/300"/>
          <h2 className="cardTitle">ISEF</h2>
          <h5 className="cardSubTitle">Competition</h5>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/300"/>
          <h2 className="cardTitle">ISEF</h2>
          <h5 className="cardSubTitle">Competition</h5>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/300"/>
          <h2 className="cardTitle">ISEF</h2>
          <h5 className="cardSubTitle">Competition</h5>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <img src="https://via.placeholder.com/300"/>
          <h2 className="cardTitle">ISEF</h2>
          <h5 className="cardSubTitle">Competition</h5>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/300"/>
          <h2 className="cardTitle">ISEF</h2>
          <h5 className="cardSubTitle">Competition</h5>
        </div>
        <div className="card">
          <button style={{width: '300px', height: '300px', fontFamily: 'Merriweather',}}> Are you a current STEM Student? <br/><span style={{color: "blue", textDecoration: 'underline',}}>Click to add something </span></button>
        </div>
      </div>
    </div>

    <hr style={{borderColor: 'grey', width: '600px',}}></hr>

    <div className="admittedTitle">
      <h3>Admitted</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
        <br/>been the industry's standard dummy</p>
    </div>

    <div className="admitted"> 
      <div className="column">
        <img src="https://via.placeholder.com/200" style={{borderRadius: '50%',}}/>
        <h2 className="cardTitle">ISEF</h2>
        <h5 className="cardSubTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
      </div>
      <div className="column">
        <img src="https://via.placeholder.com/200" style={{borderRadius: '50%',}}/>
        <h2 className="cardTitle">ISEF</h2>
        <h5 className="cardSubTitle"> leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letra</h5>
      </div>
      <div className="column">
        <img src="https://via.placeholder.com/200" style={{borderRadius: '50%',}}/>
        <h2 className="cardTitle">ISEF</h2>
        <h5 className="cardSubTitle">ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </h5>
      </div>
      <div className="column">
        <img src="https://via.placeholder.com/200" style={{borderRadius: '50%',}}/>
        <h2 className="cardTitle">ISEF</h2>
        <h5 className="cardSubTitle">make a type specimen book. It has survived not only five centuries, but also the</h5>
      </div>
    </div>

    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
