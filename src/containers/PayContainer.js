import React, { Component } from 'react';
import PayList from 'components/basket/PayList';

class PayContainer extends Component {
  state = {
    totalPrice: 0,
  }

  // handleCount = (e) => {
  //   const {name, value} = e.target;
  //   const { payList } = this.props;
  //   const index = payList.findIndex(item => item.id === Number(name))
  // }

  deleteInPayList = (id) => {
    const { payList } = this.props;
  }

  render() {
    const { payList, handleCount } = this.props;
    const { totalPrice, count } = this.state;
    const { deleteInPayList } = this;
    
    return (
      <PayList
        payList={payList}
        totalPrice={totalPrice}
        handleCount={handleCount}
        deleteInPayList={deleteInPayList}
      />
    );
  }
}

export default PayContainer;