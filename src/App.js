import React, { Component } from 'react';

import DrinksList from './DrinksList'; 

import './App.css';

class App extends Component {
  state = {
    cocktails: [],
    drinks: []
  }

  componentDidMount(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
      .then((response) => response.json())
      .then((data) => {
        let drinks = JSON.parse(JSON.stringify(data));
        this.setState({
          drinks
        })
      })
    
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((response) => response.json())
      .then((data) => {
        let cocktails = JSON.parse(JSON.stringify(data));
        this.setState({
          cocktails
        })
      })
      
      
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
