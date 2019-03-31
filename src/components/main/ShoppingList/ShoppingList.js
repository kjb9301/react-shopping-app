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
          <div className="item-img">
            <img src={item.img} alt={item.name}/>
          </div>
        </div>
        <div className="item-bottom">
          <div className="item-name"><span>{item.name}</span></div>
          <div className="item-provider"><span>{item.provider}</span></div>
          <div className="item-price"><span>{item.price}원</span></div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;