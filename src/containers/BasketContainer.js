import React, { Component } from 'react';
import BasketList from 'components/basket/BasketList';
import PayContainer from 'containers/PayContainer';

class BasketContainer extends Component {
  state = {
    basketList: [],
    payList: [],
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

  // handleCount = (e) => {
  //   const {name, value} = e.target;
    
  //   const { payList } = this.state;
  //   this.setState({
  //     count: value
  //   })

  // }

  componentWillMount(){
    this.setState({
      basketList: JSON.parse(localStorage.getItem("basketData"))
    })
  }

  render() {
    const { basketList, payList } = this.state;
    const { addToOrder, deleteInBasket } = this;

    return (
      <>
        <BasketList
          basketList={basketList}
          addToOrder={addToOrder}
          deleteInBasket={deleteInBasket}
        />
        <PayContainer payList={payList}/>
      </>
    );
  }
}

export default BasketContainer;