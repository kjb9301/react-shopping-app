import React, { Component, Fragment } from 'react';
import PayList from 'components/basket/PayList';

class PayContainer extends Component {
  state = {
    totalPrice: 0,
    count: 1
  }

  render() {
    const { payList } = this.props;
    const { count, totalPrice } = this.state;
    return (
      <Fragment>
        <PayList payList={payList} count={count} totalPrice={totalPrice}/>
      </Fragment>
    );
  }
}

export default PayContainer;