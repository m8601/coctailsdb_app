import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {Tabs, Tab} from 'react-bootstrap';

import './DrinksList.css'

const DrinksList = ({drinks, cocktails, setActiveDrink}) => {
  
  return (
    <div className="DrinkList">
      <Tabs defaultActiveKey={2} id="Menu">
        <Tab className="DrinkList__tab" eventKey={1} title="Drinks">
          {drinks.map((drink) => (
            <div key={drink.idDrink}>
              <Link to={`/${drink.idDrink}`}>{drink.strDrink}</Link>
            </div>
          ))}
        </Tab>
        <Tab className="DrinkList__tab" eventKey={2} title="Cocktails">
        {cocktails.map((cocktail) => (
            <div key={cocktail.idDrink}>
              <Link to={`/${cocktail.idDrink}`}>{cocktail.strDrink}</Link>
            </div>
          ))}
          
        </Tab>
        
      </Tabs>
      
        
    </div>
  );
}

DrinksList.propTypes = {
  drinks: PropTypes.array.isRequired,
  cocktails: PropTypes.array.isRequired
}

export default DrinksList;