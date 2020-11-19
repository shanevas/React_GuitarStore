import React, {Component} from 'react';
import CartItem from "./CartItem";

class CartList extends Component {



    render() {

        const value =  this.props.value;
        const cart = this.props.value.cart;




        return (
            <div className="container-fluid">
                {cart.map(item=>{
                  return  <CartItem key={item.id} item={item} value={value} />
                })}
            </div>
        );
    }
}

export default CartList;
