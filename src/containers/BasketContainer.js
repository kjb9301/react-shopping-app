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
    const index = basketList.findIndex((item) => item.id === id);
    this.setState({
      payList: payList.concat(basketList[index])
    })
  }

  deleteInBasket = (id) => {
    const { payList } = this.state;
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
    return (
      <Fragment>
        <BasketList basketList={basketList} addToOrder={addToOrder} deleteInBasket={deleteInBasket}/>
        <PayContainer payList={payList}/>
      </Fragment>
    );
  }
}

export default BasketContainer;