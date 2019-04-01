import React, { PureComponent, Fragment } from 'react';
import ShoppingDetail from 'components/main/ShoppingDetail';

class DetailContainer extends PureComponent {
  state = { selectedOption: ''}

  HandleChangeOption = (e) => {
    this.setState({
      selectedOption: e.target.value
    })
  }

  render() {
    console.log("detailContainer render")
    const { detailData, checkBasket, addToBasket } = this.props;
    const { selectedOption } = this.state;
    const { HandleChangeOption } = this;

    return (
      <Fragment>
        <ShoppingDetail
          detailData={detailData}
          selectedOption={selectedOption}
          checkBasket={checkBasket}
          addToBasket={addToBasket}
          HandleChangeOption={HandleChangeOption}
        />
      </Fragment>
    );
  }
}

export default DetailContainer;