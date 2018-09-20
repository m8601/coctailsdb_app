import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom'

import DrinksList from './DrinksList';
import Welcome from './Welcome';

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
          drinks: drinks.drinks
        })
      })
    
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((response) => response.json())
      .then((data) => {
        let cocktails = JSON.parse(JSON.stringify(data));
        this.setState({
          cocktails: cocktails.cocktails
        })
      })
      
      
  }
  
  
  render() {
    
    return (
      <div className="App">
        <div className="App__leftSide">
          <DrinksList drinks={this.state.drinks}/>
        </div>
        <div className="App__rightSide">
          <Router>
            <Route exact path="/" component={Welcome}/>
            
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
