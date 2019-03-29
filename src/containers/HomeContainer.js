import React, { Component, Fragment } from 'react';
import ShoppingList from 'components/main/ShoppingList';
import ShoppingDetail from 'components/main/ShoppingDetail';
import shoppingData from '/public/dummy/goods.js';
import axios from 'axios';

class HomeContainer extends Component {
  componentWillMount(){
    const test = axios.get('/public/dummy/goods.js');
    console.log(test)
  }

  render() {
    console.log("런데후");
    return (
      <Fragment>
        <ShoppingList/>
        <ShoppingDetail/>
      </Fragment>
    );
  }
}

export default HomeContainer;