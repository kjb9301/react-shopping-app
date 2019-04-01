import React from 'react';
import './ShoppingList.scss';

const ShoppingList = ({shoppingList,onDetail}) => {
  console.log("shoppingList render")
  const listItems = shoppingList.map((listItem) => {
    return (
      <ShoppingItem
        key={listItem.id}
        listItem={listItem}
        onDetail={onDetail}
      />
    )
  })

  return (
    <div className="shopping-list-wrapper">
      {listItems}
    </div>
  );
};

const ShoppingItem = ({listItem,onDetail}) => {
  console.log("shoppingLItem render")

  return (
    <div className="item-wrapper">
      <div className="item-box" onClick={() => onDetail(listItem)}>
        <div className="item-top">
          <img src={listItem.img} alt={listItem.name}/>
        </div>
        <div className="item-bottom">
          <div className="item-name">{listItem.name}</div>
          <div className="item-provider">판매자 :{listItem.provider}</div>
          <div className="item-price">가격:{listItem.price}원</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;