import React, { Component, Fragment } from 'react';
import BasketList from 'components/basket/BasketList';
import PayList from 'components/basket/PayList';

class BasketContainer extends Component {
  state = {
    basketList: [],
    orderList: []
  }

  addToOrder = (id) => {
    const { basketList } = this.state;
    const index = basketList.map((item) => item.id === id);
  }

  deleteInBasket = (id) => {
    const { basketList } = this.state;
  }

  componentWillMount(){
    this.setState({
      basketList: JSON.parse(localStorage.getItem("basketData"))
    })
  }

  render() {
    const { basketList } = this.state;
    const { addToOrder, deleteInBasket } = this;

    return (
      <Fragment>
        <BasketList basketList={basketList} addToOrder={addToOrder} deleteInBasket={deleteInBasket}/>
        <PayList/>
      </Fragment>
    );
  }
}

export default BasketContainer;