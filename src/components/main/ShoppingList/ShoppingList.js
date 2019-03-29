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
    <div className="shopping-item-wrapper">
      <div className="shopping-item-box" onClick={() => onDetail(item)}>
        <div className="shopping-item-top">
          <div className="shopping-item-img">
            <img src={item.img} alt={item.name}/>
          </div>
        </div>
        <div className="shopping-item-bottom">
          <div className="shopping-item-name"><span>{item.name}</span></div>
          <div className="shopping-item-provider"><span>{item.provider}</span></div>
          <div className="shopping-item-price"><span>{item.price}원</span></div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;