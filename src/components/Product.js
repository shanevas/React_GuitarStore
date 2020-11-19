import React, {Component} from 'react';

import {Link} from'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

import {ProductConsumer} from "../Context";


class Product extends Component {
    render() {

        const {id,title,img,price,inCart} = this.props.product;
        // const id = this.props.id;

        return (
            <div id="products" className="col-9 mx-auto col-md-6 col-lg-3 my-3">

                <div className="card">

                    <ProductConsumer>
                        {(value) =>{
                            return(
                                <div onClick={()=>{value.handleDetail(id)}} className="img-container p-5">
                                    <Link to={"/details"}>
                                        <img className="card-img-top" src={img} alt="hehehe"/>

                                    </Link>
                                    <button onClick={()=>{value.addToCart(id); value.openModal(id);}} className="cart-btn" disabled={!!inCart}>
                                        {inCart?(<p className="text-capitalize mb-0 cart-text-inside">in cart</p>):(<FaShoppingCart className={"cart-icon"}/>)}
                                    </button>
                                </div>
                            )
                        }}
                    </ProductConsumer>

                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue mb-0 align-self-center">
                            <span className="mr-1">$</span>{price}
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;



