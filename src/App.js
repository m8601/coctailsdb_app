import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom'

import DrinksList from './DrinksList';
import Welcome from './Welcome';
import BeverageDetails from './BeverageDetails';

import './App.css';

class App extends Component {
  state = {
    cocktails: [],
    drinks: []
  }

  componentDidMount(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((response) => response.json())
      .then((data) => {
        let cocktails = JSON.parse(JSON.stringify(data));
        this.setState({
          cocktails: cocktails.drinks
        })
      });
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
      .then((response) => response.json())
      .then((data) => {
        let drinks = JSON.parse(JSON.stringify(data));
        this.setState({
          drinks: drinks.drinks
        })
      });
    
    
  }
  
  //
  render() {
    
    return (
      <Router>
      <div className="App">
        <div className="App__leftSide">
          <DrinksList
            setActiveDrink={this.handleSetActiveDrink} 
            drinks={this.state.drinks}
            cocktails={this.state.cocktails}
            />
        </div>
        <div className="App__rightSide">
          <div>
            <Route exact path="/" component={Welcome}/>
            <Route path="/:id" component={BeverageDetails}/>
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
