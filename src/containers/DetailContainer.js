import React, { Component, PureComponent, Fragment } from 'react';
import ShoppingDetail from 'components/main/ShoppingDetail';

class DetailContainer extends PureComponent {
  state = { selectedOption: ''}

  onChangeOption = (e) => {
    this.setState({
      selectedOption: e.target.value
    })
  }

  render() {
    console.log("detailContainer render")
    const { detailData, checkBasket, addToBasket } = this.props;
    const { selectedOption } = this.state;
    const { onChangeOption } = this;
    console.log(detailData)
    return (
      <Fragment>
        <ShoppingDetail detailData={detailData} selectedOption={selectedOption} checkBasket={checkBasket} addToBasket={addToBasket} onChangeOption={onChangeOption}/>
      </Fragment>
    );
  }
}

export default DetailContainer;