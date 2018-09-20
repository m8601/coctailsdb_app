import React from 'react';
import PropTypes from 'prop-types';

import './DrinksList.css'

const DrinksList = ({drinks}) => {
  console.log(drinks);
  
  return (
    <div className="DrinkList">
      List
      <hr/>
      {drinks.map((drink) => (
        <div key={drink.idDrink}>
          {drink.strDrink}
        </div>
      ))}
    </div>
  );
}

DrinksList.propTypes = {
  drinks: PropTypes.array.isRequired
}

export default DrinksList;