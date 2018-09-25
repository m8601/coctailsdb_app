import React, { Component } from 'react';
import {Image, Grid, Col, Row} from 'react-bootstrap';
import './BeverageDetails.css';

class BeverageDetails extends Component {
  state = {
    details: []
  }

  fetchDrink(){
    let id = this.props.match.params.id;
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        let details = JSON.parse(JSON.stringify(data));
        this.setState({
          details: details.drinks[0]
        })
      })
  }
  
  componentDidMount(){
    this.fetchDrink();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchDrink();
    }
  }

  getIngredients = () => {
    let drink = this.state.details;
    let ingredients = [
      drink.strIngredient1,
      drink.strIngredient2,
      drink.strIngredient3,
      drink.strIngredient4,
      drink.strIngredient5,
      drink.strIngredient6,
      drink.strIngredient7,
      drink.strIngredient8,
      drink.strIngredient9,
      drink.strIngredient10,
      drink.strIngredient11,
      drink.strIngredient12,
      drink.strIngredient13,
      drink.strIngredient14,
      drink.strIngredient15,
    ];
    ingredients = ingredients.filter(Boolean);
    
    return ingredients;
  }


  render(){
    let ingredients = this.getIngredients();
    console.log(this.state.details);
    
    return (
      <div className="BeverageDetails">
        <Image className="BeverageDetails__thumbnail" src={this.state.details.strDrinkThumb} circle />
        
        <h2>{this.state.details.strDrink}</h2>
        <hr/>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4}>
              <p>Instructions:</p>
              {(!this.state.details.strInstructions)? 'Mix all' : `${this.state.details.strInstructions}`}
            </Col>
            <Col xs={12} md={4}>
              <p>Ingridients:</p>
              {ingredients.map((el,index) => (
                <div key={index}>
                  {el}
                </div>
              ))}
            </Col>
            <Col xs={12} md={4}>
              <p>Glass:</p>
              {this.state.details.strGlass}
            </Col>
          </Row>
        </Grid>
        
      </div>
    );
  }
}

export default BeverageDetails;