import React, { Component } from 'react';

class BeverageDetails extends Component {
  

  render(){
    return (
      <div>
        {this.props.match.params.id}
      </div>
    );
  }
}

export default BeverageDetails;