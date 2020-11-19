import React, {Component} from 'react';
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";



class Cart extends Component {
    render() {
        return (
            <div className={" cart-wrapper"}>

                <ProductConsumer>
                    {value => {
                        if (value.cart.length === 0) {
                            return <EmptyCart/>
                        } else {
                            return (
                                <div>
                                    <div className="container pt-5">
                                        <Title name={"My"} title={"Cart"}/>
                                    </div>
                                    <CartColumns/>
                                    <CartList  value={value}/>
                                    <CartTotals value={value}/>
                                </div>
                            );
                        }

                    }}

                </ProductConsumer>

            </div>
        );
    }
}

export default Cart;
