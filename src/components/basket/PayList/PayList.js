import React from 'react';
import './PayList.scss';

const PayList = ({payList, count, totalPrice}) => {
  const payItems = payList.map((payItem,index) => {
    return (
      <PayItem key={index} payItem={payItem} count={count}/>
    )
  })
  return (
    <div className="pay-list-wrapper">
      <div className="pay-header"><span>결제리스트</span></div>
      <div className="pay-section">
        <div className="pay-text">
          <div className="pay-text-x"></div>
          <div className="pay-text-name">상품명</div>
          <div className="pay-text-provider">판매자</div>
          <div className="pay-text-option">선택옵션</div>
          <div className="pay-text-count">수량</div>
          <div className="pay-text-price">금액</div>
          <div className="pay-text-ship-price">배송비</div>
        </div>
        <div className="pay-content">{payItems}</div>
      </div>
      <div className="pay-footer">
        <div className="pay-total"><span>{totalPrice}원</span></div>
        <div className="pay-btn"><button>주문하기</button></div>
      </div>
    </div>
  );
};

const PayItem = ({payItem,count}) => {
  return (
    <div className="pay-box">
      <div className="pay-x">&times;</div>
      <div className="pay-name">{payItem.name}</div>
      <div className="pay-provider">{payItem.provider}</div>
      <div className="pay-option">{`${payItem.options.color} / ${payItem.options.size}`}</div>
      <div className="pay-count">
        <input type="number" value={count}/>
      </div>
      <div className="pay-price">{payItem.price}원</div>
      <div className="pay-ship-price">{payItem.shipping.price}원</div>
    </div>
  )
}

export default PayList;