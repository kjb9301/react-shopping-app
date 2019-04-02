import React, { Component } from 'react';
import ShoppingList from 'components/main/ShoppingList';
import ListContainer from 'containers/ListContainer';
import DetailContainer from 'containers/DetailContainer';

class HomeContainer extends Component {
  state = {
    shoppingData: [],
    basketData: [],
    detailData: '',
  }

  handleDetail = (listItem) => {
    this.setState({
      detailData: listItem
    })
  }

  checkBasket = (info) => {
    const { id, selectedOption } = info;
    const { basketData } = this.state;

    if(!selectedOption) return alert("옵션을 선택해 주십시오.");
    const checkTF = basketData.some((item) => (item.id === id && item.options.id === Number(selectedOption)));
    if(checkTF){
      alert("이미 장바구니에 담겨져 있습니다.");
    }else{
      this.addToBasket(info);
    }
  }

  addToBasket = (info) => {
    const { id, selectedOption } = info;
    const { shoppingData } = this.state;

    const index = shoppingData.findIndex((data) => data.id === id );
    const selectedData = {...shoppingData[index]};
    const optionIdx = selectedData.options.findIndex((value) => value.id === Number(selectedOption));
    const option = selectedData.options[optionIdx];
    selectedData.options = option;
    
    this.setState((prevState) => ({
      basketData: prevState.basketData.concat(selectedData),
      detailData: ''
    }))
    alert("해당 상품을 장바구니에 추가하였습니다");
  }

  componentWillMount(){
    this.setState({
      shoppingData: JSON.parse(localStorage.getItem("shoppingData"))
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    localStorage.basketData = JSON.stringify(nextState.basketData);
    return this.state.detailData !== nextState.detailData
  }

  render() {
    const { shoppingData, detailData } = this.state;
    const { handleDetail, addToBasket, checkBasket } = this;

    return (
      <>
        <ListContainer shoppingList={shoppingData} handleDetail={handleDetail}/>
        <DetailContainer detailData={detailData} checkBasket={checkBasket} addToBasket={addToBasket}/>
      </>
    );
  }
}

export default HomeContainer;