import React from 'react';
import { Item } from './Item';

export const ItemList = ({ items }) => {
  return (
    <div className="d-flex">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
