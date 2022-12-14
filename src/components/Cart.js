import { useSelector, useDispatch } from "react-redux";
import "../styles.css";

import CartItem from './CartItem';

function Cart(){

 let cartGoods = useSelector(state => state.card)

 let dispatch = useDispatch()

const del = (id) =>{
   dispatch({type: 'DELETE', payload:id})
}
 
 const getTotal = () => {
    return cartGoods.reduce((acc, item) => acc + item.price, 0);
  }

    return (
      <div className="cart">
        <h2 className="cart__title" >Shopping Cart</h2>
        { cartGoods.length ?
          <ul className="cart__list">
            {cartGoods.map((item, index) => (
              <li className="cart__list-item" key={index}>
                <CartItem del={del} {...item} />
              </li>
            ))}
          </ul>
        :
          <p className="cart__note">Nothing in the cart now</p>
        }

        <p className="cart__total">Total: {getTotal()}.00$</p>
      </div>
    );
  
}

export default Cart;