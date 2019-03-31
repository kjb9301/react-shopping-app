import React, { Component, Fragment } from 'react';
import ShoppingList from 'components/main/ShoppingList';
import DetailContainer from 'containers/DetailContainer';

class HomeContainer extends Component {
  state = {
    detailData: '',
    shoppingData: [],
    basketData: []
  }

  handleDetail = (item) => {
    this.setState({
      detailData: item
    })
  }

  addToBasket = (info) => {
    const { id, selectedOption } = info;
    const { shoppingData, basketData } = this.state;

    try{
      const index = shoppingData.findIndex((data) => data.id === id );
      const selectedData = shoppingData[index];
      const optionIdx = selectedData.options.findIndex((value) => value.id === Number(selectedOption));
      const option = selectedData.options[optionIdx];
      selectedData.options = option;
      
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

  shouldComponentUpdate(nextProps, nextState){
    const { detailData } = this.state;
    localStorage.basketData = JSON.stringify(nextState.basketData);
    return detailData !== nextState.detailData;
  }

  render() {
    console.log("HomeContainer render")
    const { shoppingData, detailData } = this.state;
    const { handleDetail, addToBasket } = this;
    
    return (
      <Fragment>
        <ShoppingList shoppingList={shoppingData} onDetail={handleDetail}/>
        <DetailContainer detailData={detailData} addToBasket={addToBasket}/>
      </Fragment>
    );
  }
}

export default HomeContainer;