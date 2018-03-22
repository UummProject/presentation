import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Impress, Step } from 'react-impressjs';
import './styles.css';

const TRANSITION_TIME = 500
const WIDTH = window.innerWidth * 1.2

class App extends Component {
  render() {
    return (
      <div className="App">
        <Impress 
          progress={true}
          fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}
          >
         
          <Step 
            id = "1"
            //className={'without_id_is_ok'} 
            data={{ x:0, y:0, scale:1 }}>
            <h1>What's this about?</h1>
            
            <p> Redesigning governance</p>
          </Step>


          <Step
            duration={TRANSITION_TIME}
            data={
            {
                x:WIDTH*0,
                y:0,
                scale:1
            }}>
            
            <h1>Unga bunga!</h1>
          </Step>

          

         
      </Impress>
      </div>
    );
  }
}

export default App;
