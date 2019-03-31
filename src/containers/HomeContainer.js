import React, { Component, Fragment } from 'react';
import ShoppingList from 'components/main/ShoppingList';
import DetailContainer from 'containers/DetailContainer';

class HomeContainer extends Component {
  state = {
    detailData: ''
  }

  handleDetail = (item) => {
    this.setState({
      detailData: item
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    const { detailData } = this.state;
    return detailData !== nextState.detailData;
  }

  render() {
    console.log("HomeContainer render")
    const { shoppingData, addToBasket } = this.props;
    const { detailData } = this.state;
    const { handleDetail } = this;
    
    return (
      <Fragment>
        <ShoppingList shoppingList={shoppingData} onDetail={handleDetail}/>
        <DetailContainer detailData={detailData} addToBasket={addToBasket}/>
      </Fragment>
    );
  }
}

export default HomeContainer;