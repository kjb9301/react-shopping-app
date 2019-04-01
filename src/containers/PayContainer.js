import React, { Component, Fragment } from 'react';
import PayList from 'components/basket/PayList';

class PayContainer extends Component {
  state = {
    totalPrice: 0,
    count: 0
  }

  handleCount = (e) => {
    const {name, value} = e.target;
    
    const { payList } = this.props;
    this.setState({
      count: value
    })

  }

  render() {
    const { payList } = this.props;
    const { totalPrice, count } = this.state;
    const { handleCount } = this;
    console.log(count)
    return (
      <Fragment>
        <PayList payList={payList} totalPrice={totalPrice} handleCount={handleCount}/>
      </Fragment>
    );
  }
}

export default PayContainer;