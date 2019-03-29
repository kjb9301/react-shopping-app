import React from 'react';
import './ShoppingDetail.scss';

const ShoppingDetail = ({detailData}) => {
  const { name, img, provider, price } = detailData;

  return (
    <div className="detail-wrapper">
      {detailData !== ''?
        <div className="detail-box">
          <div className="detail-img">
            <img src={detailData.img} alt={detailData.name}/>
          </div>
          <div className="detail-name"><span>{detailData.name}</span></div>
          <div className="detail-provider"><span>{detailData.provider}</span></div>
          <div className="detail-price"><span>{detailData.price}원</span></div>
          <div className="detail-price"><span>{detailData.price}원</span></div>
          <div className="detail-price"><span>{detailData.price}원</span></div>
          <div className="detail-price"><button>담기</button></div>
        </div>
      :
        <div></div>
      }
    </div>
  );
};

export default ShoppingDetail;