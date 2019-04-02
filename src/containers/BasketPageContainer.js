import React, { Component } from 'react';
import BasketContainer from 'containers/BasketContainer';
import PayContainer from 'containers/PayContainer';

class BasketPageContainer extends Component {
  state = {
    basketList: [],
    payList: [],
    totalPrice: 0
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

  deleteInPayList = (id_Op) => {
    const id = Number(id_Op.split("_")[0]);
    const opId = Number(id_Op.split("_")[1]);
    const { payList } = this.state;
    const newPayList = payList.filter((item) => (item.id !== id || (item.id === id && item.options.id !== opId)));
    this.setState({
      payList: newPayList
    })
  }

  changeCount = (e) => {
    const { name, value } = e.target;
    const id = Number(name.split("_")[0]);
    const opId = Number(name.split("_")[1]);

    const { payList } = this.state;
    const index = payList.findIndex(item => item.id === id && item.options.id === opId);
    const newItem = {...payList[index]};
    newItem.count = Number(value);

    if(Number(value) > newItem.options.stock){
      alert("더 이상 재고가 없습니다.");
      return false;
    }

    const newPayList = [
      ...payList.slice(0, index),
      newItem,
      ...payList.slice(index+1, payList.length)
    ];

    this.setState({
      payList : newPayList
    })
  }

  // handleTotalPrice = () => {
  //   const { payList } = this.state;
  //   let itemPrice = 0;
  //   let shipPrice = 0;
  //   payList.forEach((item) => {
  //     itemPrice += item.price * item.count;
  //     shipPrice += item.shipping.price;
  //   })

  //   const total = itemPrice + shipPrice;
    
  //   this.setState({
  //     totalPrice: total
  //   })
  // }

  componentWillMount(){
    this.setState({
      basketList: JSON.parse(localStorage.getItem("basketData"))
    })
  }

  render() {
    console.log("BasketPageContainer render")
    const { basketList, payList } = this.state;
    const { addToOrder, deleteInBasket, deleteInPayList, changeCount, handleKeyPress } = this;

    return (
      <>
        <BasketContainer
          basketList={basketList}
          addToOrder={addToOrder}
          deleteInBasket={deleteInBasket}
        />
        <PayContainer
          payList={payList}
          changeCount={changeCount}
          handleKeyPress={handleKeyPress}
          deleteInPayList={deleteInPayList}
        />
      </>
    );
  }
}

export default BasketPageContainer;