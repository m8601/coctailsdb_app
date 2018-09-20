import React from 'react';
import PropTypes from 'prop-types';

const DrinksList = ({drinks}) => {
  return (
    <div className="DrinkList">
      List
    </div>
  );
}

DrinksList.propTypes = {
  drinks: PropTypes.array.isRequired
}

export default DrinksList;