import React, { Component } from 'react';
import PayList from 'components/basket/PayList';

class PayContainer extends Component {
  state = {
    totalPrice: 0,
  }

  render() {
    const { payList, changeCount, handleKeyPress } = this.props;
    const { totalPrice } = this.state;
    const { deleteInPayList } = this;
    
    return (
      <PayList
        payList={payList}
        totalPrice={totalPrice}
        changeCount={changeCount}
        deleteInPayList={deleteInPayList}
        handleKeyPress={handleKeyPress}
      />
    );
  }
}

export default PayContainer;