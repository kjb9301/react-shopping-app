import React, { Component, Fragment } from 'react';
import BasketList from 'components/basket/BasketList';
import OrderList from 'components/basket/OrderList';

class BasketContainer extends Component {
  render() {
    return (
      <Fragment>
        <BasketList/>
        <OrderList/>
      </Fragment>
    );
  }
}

export default BasketContainer;