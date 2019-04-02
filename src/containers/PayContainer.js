import React, { Component } from 'react';
import PayList from 'components/basket/PayList';

class PayContainer extends Component {

  shouldComponentUpdate(nextProps,nextState){
    return this.props.payList !== nextProps.payList;
  }

  render() {
    console.log("payContainer render")
    const { payList, changeCount, handleKeyPress, deleteInPayList } = this.props;
    
    return (
      <PayList
        payList={payList}
        //totalPrice={totalPrice}
        changeCount={changeCount}
        deleteInPayList={deleteInPayList}
        handleKeyPress={handleKeyPress}
      />
    );
  }
}

export default PayContainer;