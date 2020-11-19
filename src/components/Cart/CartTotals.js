import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {ButtonContainer} from "../button";

class CartTotals extends Component {



    render() {

        const {cartSubtotal,cartTax,cartTotal,clearCart,purchaseModalOpen} = this.props.value;

        return (
            <div className="pt-5">
                <div className="cart-totals container">
                    <div className="row">
                        <div className="text-white col-10 mt-2 ml-sm-5 text-capitalize text-right">
                            <Link to={"/products"}>
                                <ButtonContainer onClick={()=>{clearCart()}}>
                                    Clear Cart
                                </ButtonContainer>
                            </Link>

                            <h5 className="mt-3">
                                <span className="text-blue">Sub Total :</span>
                                <strong> $ {cartSubtotal}</strong>
                            </h5>

                            <h5>
                                <span className="text-blue">Tax :</span>
                                <strong> $ {cartTax}</strong>
                            </h5>

                            <h5>
                                <span className="text-blue">Net total :</span>
                                <strong> $ {cartTotal}</strong>
                            </h5>

                        </div>

                    </div>
                    <div className="row mx-auto mt-5 pb-5">
                        <div className="col-12 mx-auto d-flex justify-content-center">
                            <Link to={"/purchased"}>
                                <button className="purchase-btn mx-auto">PURCHASE</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartTotals;
