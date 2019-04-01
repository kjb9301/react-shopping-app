import React, { Component, Fragment } from 'react';
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
    const { payList } = this.props;
    const { totalPrice, count } = this.state;
    const { handleCount, deleteInPayList } = this;
    
    return (
      <Fragment>
        <PayList
          payList={payList}
          totalPrice={totalPrice}
          handleCount={handleCount}
          deleteInPayList={deleteInPayList}
        />
      </Fragment>
    );
  }
}

export default PayContainer;