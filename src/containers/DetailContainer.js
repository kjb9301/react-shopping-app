import React, { Component, Fragment } from 'react';
import ShoppingDetail from 'components/main/ShoppingDetail';

class DetailContainer extends Component {
  state = { selectedOption: ''}

  onChangeOption = (e) => {
    this.setState({
      selectedOption: e.target.value
    })
  }

  render() {
    const { detailData, addToBasket } = this.props;
    const { selectedOption } = this.state;
    const { onChangeOption } = this;
    return (
      <Fragment>
        <ShoppingDetail detailData={detailData} selectedOption={selectedOption} addToBasket={addToBasket} onChangeOption={onChangeOption}/>
      </Fragment>
    );
  }
}

export default DetailContainer;