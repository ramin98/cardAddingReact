import React from "react";

import "../styles.css";


function CartItem({title, price, del, id}) {



  return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <button onClick={() => del(id)}>DELETE</button>
      </div>
    );
  
}

export default CartItem;