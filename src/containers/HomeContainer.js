import React, { Component, Fragment } from 'react';
import ShoppingList from 'components/main/ShoppingList';
import ShoppingDetail from 'components/main/ShoppingDetail';

class HomeContainer extends Component {
  state = {
    shoppingdata: [],
    detailData: ''
  }

  handleDetail = (item) => {
    this.setState({
      detailData: item
    })
  }

  componentWillMount(){
    this.setState({
      shoppingData: JSON.parse(localStorage.getItem("shoppingData"))
    })
  }

  render() {
    const { shoppingData, detailData } = this.state;
    const { handleDetail } = this;
    console.log(shoppingData)
    return (
      <Fragment>
        <ShoppingList shoppingList={shoppingData} onDetail={handleDetail}/>
        <ShoppingDetail detailData={detailData}/>
      </Fragment>
    );
  }
}

export default HomeContainer;