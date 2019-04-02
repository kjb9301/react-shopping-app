import React, { Component } from 'react';
import BasketList from 'components/basket/BasketList';
import PayContainer from 'containers/PayContainer';

class BasketContainer extends Component {
  state = {
    basketList: [],
    payList: []
  }

  addToOrder = (id,opId) => {
    const { basketList } = this.state;
    let newPayList = basketList.filter((item) => (item.id === id && item.options.id === opId));
    newPayList = newPayList.map(item => item = {...item, count:1});
    const newBasketList = basketList.filter((item) => (item.id !== id || (item.id === id && item.options.id !== opId)));
    
    this.setState((prevState) => ({
      payList: prevState.payList.concat(newPayList),
      basketList: newBasketList
    }))
  }

  deleteInBasket = (id,opId) => {
    this.setState((prevState) => ({
      basketList: prevState.basketList.filter((item) => (item.id !== id || (item.id === id && item.options.id !== opId)))
    }))
  }

  deleteInPayList = (id) => {

  }

  handleKeyPress = (e) => {
    console.log(e.target.value)
  }

  changeCount = (e) => {
    const { name, value } = e.target;
    const id = Number(name.split("_")[0]);
    const opId = Number(name.split("_")[1]);

    const { payList } = this.state;
    const index = payList.findIndex(item => item.id === id && item.options.id === opId);
    const newItem = {...payList[index]};
    newItem.count = Number(value);
    const newPayList = [
      ...payList.slice(0, index),
      newItem,
      ...payList.slice(index+1, payList.length)
    ];

    this.setState({
      payList : newPayList
    })
  }

  componentWillMount(){
    this.setState({
      basketList: JSON.parse(localStorage.getItem("basketData"))
    })
  }

  render() {
    const { basketList, payList } = this.state;
    const { addToOrder, deleteInBasket, changeCount, handleKeyPress } = this;
    console.log(payList)
    return (
      <>
        <BasketList
          basketList={basketList}
          addToOrder={addToOrder}
          deleteInBasket={deleteInBasket}
        />
        <PayContainer
          payList={payList}
          changeCount={changeCount}
          handleKeyPress={handleKeyPress}
        />
      </>
    );
  }
}

export default BasketContainer;