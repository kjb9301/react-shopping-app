import React, { Component, Fragment } from 'react';
import HomeContainer from 'containers/HomeContainer';
import BasketContainer from 'containers/BasketContainer';

class MainContainer extends Component {
  state = {
    shoppingData: [],
    basketData: [],
  }

  addToBasket = (info) => {
    const { id, selectedOption } = info;
    const { shoppingData } = this.state;

    try{
      const index = shoppingData.findIndex((data) => data.id === id );
      const selectedData = shoppingData[index];
      const optionIdx = selectedData.options.findIndex((value) => value.id === Number(selectedOption));
      const option = selectedData.options[optionIdx];
      selectedData.options = option;
      
      const { basketData } = this.state;
      this.setState({
        basketData: basketData.concat(selectedData)
      })
      alert("해당 상품을 장바구니에 추가하였습니다");
    }catch(err){
      console.log(err);
    }
  }

  componentWillMount(){
    this.setState({
      shoppingData: JSON.parse(localStorage.getItem("shoppingData"))
    })
  }

  render() {
    const { location } = this.props;
    const { shoppingData, basketData } = this.state;
    const { addToBasket } = this;
    console.log(basketData)
    return (
      <Fragment>
        {
          location.pathname === '/'?
            <HomeContainer shoppingData={shoppingData} addToBasket={addToBasket}/>
          :
            <BasketContainer basketData={basketData}/>
        }
      </Fragment>
    );
  }
}

export default MainContainer;