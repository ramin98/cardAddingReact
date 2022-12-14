import React from "react";
import "../styles.css";
import { useSelector, useDispatch } from "react-redux";

import GoodsItem from './GoodsItem';

function Goods() {

  let goods = useSelector(state => state.goods)
  let dispatch = useDispatch()

  const add = (id) => {
      dispatch({type:'ADD', payload:id})
  }
    
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {goods.map(item => (
          <ul className="goods__list" key={item.id}>
            <li className="goods__list-item">
              <GoodsItem add={add} {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  
}

export default Goods;