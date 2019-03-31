import React from 'react';
import './PayList.scss';

const PayList = () => {
  return (
    <div className="pay-list-wrapper">
      <div className="pay-header"><span>결제리스트</span></div>
      <div className="pay-section"></div>
      <div className="pay-footer">
        <div className="pay-total"><span>원</span></div>
        <div className="pay-btn"><button>주문하기</button></div>
      </div>
    </div>
  );
};

const PayItem = () => {
  return (
    <div className="pay-wrapper">
      <div className="pay-box">
        <div></div>
      </div>
    </div>
  )
}

export default PayList;