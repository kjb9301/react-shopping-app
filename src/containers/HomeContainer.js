import React, { Component, Fragment } from 'react';
import ShoppingList from 'components/main/ShoppingList';
import ShoppingDetail from 'components/main/ShoppingDetail';

class HomeContainer extends Component {
  render() {
    return (
      <Fragment>
        <ShoppingList/>
        <ShoppingDetail/>
      </Fragment>
    );
  }
}

export default HomeContainer;