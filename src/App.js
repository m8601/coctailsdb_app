import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam quae sequi expedita dignissimos obcaecati ut culpa vitae distinctio minus porro tempore ipsa cumque omnis consequatur sed at quasi quaerat, repudiandae est. Aut commodi repellendus aspernatur ullam, quaerat qui deserunt velit quod neque, consectetur libero repudiandae nihil voluptate sequi numquam nesciunt provident, impedit nobis natus quidem incidunt at eos temporibus? Quidem sit reprehenderit iste distinctio debitis consequuntur rerum error corrupti, perferendis illo nostrum accusamus eveniet saepe, tempora, nam voluptatibus laudantium soluta quae dolorum in commodi quisquam quod aspernatur. Aperiam corporis vel repellat alias, atque, voluptates nam nemo enim explicabo ullam omnis vitae officiis veritatis. Tempore ex dignissimos ab minus placeat consequuntur magni debitis ad recusandae? Adipisci iste fuga cumque suscipit consequuntur, sapiente debitis veritatis quisquam voluptate! Nemo qui accusamus officiis laudantium sed perferendis est modi, magnam quo minus ex molestias placeat magni sunt recusandae culpa earum velit, facere nihil! Praesentium, expedita ratione? Officia facilis dolor beatae placeat corrupti itaque architecto quibusdam sint consequatur rerum accusantium, ad sapiente aut in labore facere nihil dolorum laboriosam autem porro neque repellendus qui. Cumque repellat aut aliquid? Obcaecati libero mollitia doloribus totam, tempore temporibus! Quibusdam veniam adipisci obcaecati accusantium numquam, tempora ducimus nihil animi earum dicta sequi explicabo voluptate consequuntur assumenda deleniti! Odio ab incidunt, dignissimos reiciendis omnis libero numquam laborum fuga commodi rem aut culpa sit minus delectus ex quod quasi quidem fugiat? Tenetur vero quae quaerat sed fugiat quam nostrum magnam inventore debitis!
        </div>
      </div>
    );
  }
}

export default App;
