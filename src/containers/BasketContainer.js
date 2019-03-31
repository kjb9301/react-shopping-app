import React, { Component, Fragment } from 'react';
import BasketList from 'components/basket/BasketList';
import PayList from 'components/basket/PayList';

class BasketContainer extends Component {
  render() {
    const { basketData } = this.props;
    return (
      <Fragment>
        <BasketList basketData={basketData}/>
        <PayList/>
      </Fragment>
    );
  }
}

export default BasketContainer;