import React from 'react';
import './ShoppingDetail.scss';

const ShoppingDetail = ({detailData, selectedOption, addToBasket, onChangeOption}) => {
  const { id } = detailData;
  const selectedInfo = {id, selectedOption};
  return (
    <div className="detail-wrapper">
      {detailData !== ''?
        <div className="detail-box">
          <div className="detail-left">
            <img src={detailData.img} alt={detailData.name}/>
          </div>
          <div className="detail-right">
            <div className="detail-text">
              <div className="detail-name"><span>{detailData.name}</span></div>
              <div className="detail-provider"><span>{detailData.provider}</span></div>
              <div className="detail-price"><span>{detailData.price}원</span></div>
              <div className="detail-price"><span>{detailData.shipping.price}원</span></div>
              <div className="detail-price">
                <select onChange={onChangeOption}>
                  <option value=''>--선택없음--</option>
                  {detailData.options.map((option,index) => {
                    return (<option key={index} value={option.id}>{`${option.color} / ${option.size}`}</option>)
                  })}
                </select>
              </div>
            </div>
            <div className="detail-btn">
              <button onClick={() => addToBasket(selectedInfo)}>장바구니 담기</button>
            </div>
          </div>
        </div>
      :
        <div></div>
      }
    </div>
  );
};

export default ShoppingDetail;