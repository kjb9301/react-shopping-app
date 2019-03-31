import React from 'react';
import './ShoppingList.scss';

const ShoppingList = ({shoppingList,onDetail}) => {
  const shoppingitems = shoppingList.map((item) => {
    return (
      <ShoppingItem
        key={item.id}
        item={item}
        onDetail={onDetail}
      />
    )
  })

  return (
    <div className="shopping-list-wrapper">
      {shoppingitems}
    </div>
  );
};

const ShoppingItem = ({item,onDetail}) => {

  return (
    <div className="item-wrapper">
      <div className="item-box" onClick={() => onDetail(item)}>
        <div className="item-top">
          <img src={item.img} alt={item.name}/>
        </div>
        <div className="item-bottom">
          <div className="item-name">{item.name}</div>
          <div className="item-provider">판매자 :{item.provider}</div>
          <div className="item-price">가격:{item.price}원</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;