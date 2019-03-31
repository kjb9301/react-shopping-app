import React from 'react';
import './BasketList.scss';
import img from 'styles/item.png';

const BasketList = ({basketData}) => {
  console.log(basketData)
  // const basketList = basketData.map((basketItem) => {
  //   return (
  //     <BasketItem basketItem={basketItem}/>
  //   )
  // })
  return (
    <div className="basket-list-wrapper">
      <div className="basket-list-box">
        <div className="basket-header">
          <div className="text-img"></div>
          <div className="text-name">상품명</div>
          <div className="text-provider">판매자</div>
          <div className="text-option">선택옵션</div>
          <div className="text-count">수량</div>
          <div className="text-price">금액</div>
          <div className="text-ship-price">배송비</div>
          <div></div>
        </div>
        <div className="basket-content">
          <BasketItem/>
        </div>
      </div> 
    </div>
  );
};

const BasketItem = ({basketItem}) => {
  return (
    <div className="item-box">
      <div className="item-img">
        <div className="img"><img src={img}/></div>
      </div>
      <div className="item-name">2222222</div>
      <div className="item-provider">3333333</div>
      <div className="item-option">4444444</div>
      <div className="item-count"><input type="number" min="0"/></div>
      <div className="item-price">666666</div>
      <div className="item-ship-price">77777777</div>
      <div>
        <div><button>주문</button></div>
        <div><button>삭제</button></div>
      </div>
    </div>
  )
}

export default BasketList;