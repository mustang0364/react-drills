import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  
  
  constructor(){
    super();
    this.state={
     foods2:['pizza','soup','cheese']
    }
      
    
  }
  
 
  
  

  
  render() {
    let food = this.state.foods2.map((element, index)=>{
      return (
        <h2 key ={index}>{element}</h2>
      )
    })





    return (
      <div className="App">
      {food}
      
      </div>
    );
  }
}

export default App;
