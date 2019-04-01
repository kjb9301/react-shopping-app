import React, { Component, Fragment } from 'react';
import BasketList from 'components/basket/BasketList';
import PayContainer from 'containers/PayContainer';

class BasketContainer extends Component {
  state = {
    basketList: [],
    payList: []
  }

  addToOrder = (id) => {
    const { basketList, payList } = this.state;
    this.setState({
      payList: payList.concat(basketList.filter((item) => item.id === id)),
      basketList: basketList.filter((item) => item.id !== id)
    })
  }

  deleteInBasket = (id) => {
    const { basketList } = this.state;
    this.setState({
      basketList: basketList.filter((item) => item.id !== id)
    })
  }

  componentWillMount(){
    this.setState({
      basketList: JSON.parse(localStorage.getItem("basketData"))
    })
  }

  render() {
    const { basketList, payList } = this.state;
    const { addToOrder, deleteInBasket } = this;
    console.log(payList)
    console.log(basketList)
    return (
      <Fragment>
        <BasketList basketList={basketList} addToOrder={addToOrder} deleteInBasket={deleteInBasket}/>
        <PayContainer payList={payList}/>
      </Fragment>
    );
  }
}

export default BasketContainer;