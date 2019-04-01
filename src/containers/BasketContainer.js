import React, { Component, Fragment } from 'react';
import BasketList from 'components/basket/BasketList';
import PayContainer from 'containers/PayContainer';

class BasketContainer extends Component {
  state = {
    basketList: [],
    payList: [],
  }

  addToOrder = (id,opId) => {
    const { basketList, payList } = this.state;
    try{
      let newPayList = basketList.filter((item) => (item.id === id && item.options.id === opId));
      newPayList = newPayList.map(item => item = {...item, count:1});
      const newBasketList = basketList.filter((item) => (item.id !== id || (item.id === id && item.options.id !== opId)));
      
      this.setState({
        payList: payList.concat(newPayList),
        basketList: newBasketList
      })
    }catch(err){
      console.log(err);
    }
  }

  deleteInBasket = (id,opId) => {
    const { basketList } = this.state;
    try{
      this.setState({
        basketList: basketList.filter((item) => (item.id !== id || (item.id === id && item.options.id !== opId)))
      })
    }catch(err){
      console.log(err);
    }
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
      <Fragment>
        <BasketList basketList={basketList} addToOrder={addToOrder} deleteInBasket={deleteInBasket}/>
        <PayContainer payList={payList}/>
      </Fragment>
    );
  }
}

export default BasketContainer;