import React, { Component, Fragment } from 'react';
import PayList from 'components/basket/PayList';

class PayContainer extends Component {
  state = {
    totalPrice: 0,
    count: 1
  }

  handleCount = (e) => {
    const {name, value} = e.target;
    console.log(name)
    console.log(value)
    this.setState({
      count: value
    })
  }

  render() {
    const { payList } = this.props;
    const { count, totalPrice } = this.state;
    const { handleCount } = this;
    console.log(count)
    return (
      <Fragment>
        <PayList payList={payList} count={count} totalPrice={totalPrice} handleCount={handleCount}/>
      </Fragment>
    );
  }
}

export default PayContainer;