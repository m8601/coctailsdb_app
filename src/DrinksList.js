import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types';

import './DrinksList.css'

const DrinksList = ({drinks, setActiveDrink}) => {
  
  return (
    <div className="DrinkList">
      List
      <hr/>
        {drinks.map((drink) => (
          <div key={drink.idDrink}>
            <Link to={`/${drink.idDrink}`}>{drink.strDrink}</Link>
          </div>
        ))}
    </div>
  );
}

DrinksList.propTypes = {
  drinks: PropTypes.array.isRequired
}

export default DrinksList;