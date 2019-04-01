import React from 'react';
import './BasketList.scss';

const BasketList = ({basketList, addToOrder, deleteInBasket}) => {
  const basketItems = basketList.map((basketItem,index) => {
    return (
      <BasketItem key={index} basketItem={basketItem} addToOrder={addToOrder} deleteInBasket={deleteInBasket}/>
    )
  })
  return (
    <div className="basket-list-wrapper">
      <div className="basket-list-box">
        <div className="basket-header">
          <div className="text-img"></div>
          <div className="text-name">상품명</div>
          <div className="text-provider">판매자</div>
          <div className="text-option">선택옵션</div>
          <div className="text-price">금액</div>
          <div className="text-ship-price">배송비</div>
          <div></div>
        </div>
        <div className="basket-content">
          {basketItems}
        </div>
      </div> 
    </div>
  );
};

const BasketItem = ({basketItem, addToOrder, deleteInBasket}) => {
  return (
    <div className="item-box">
      <div className="item-img">
        <div className="img"><img src={basketItem.img}/></div>
      </div>
      <div className="item-name">{basketItem.name}</div>
      <div className="item-provider">{basketItem.provider}</div>
      <div className="item-option">{`${basketItem.options.color} / ${basketItem.options.size}`}</div>
      <div className="item-price">{basketItem.price}원</div>
      <div className="item-ship-price">{basketItem.shipping.price}원</div>
      <div className="item-btn">
        <div className="btn-order"><button onClick={() => addToOrder(basketItem.id)}>주문</button></div>
        <div className="btn-delete"><button onClick={() => deleteInBasket(basketItem.id)}>삭제</button></div>
      </div>
    </div>
  )
}

export default BasketList;