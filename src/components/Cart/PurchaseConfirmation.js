import React, {Component} from 'react';
import {ProductConsumer} from "../../Context";

import {Link} from 'react-router-dom';
import { GiGuitar } from "react-icons/gi";

class PurchaseConfirmation extends Component {
    render() {
        return (

            <div className="Purchase-wrapper">
                <div className="container">
                    <div className="row max-height align-items-center">
                        <div className="col-12">
                            <h1 className="text-white text-center">Thank you for your business!</h1>
                            <div className="d-flex justify-content-center">

                                <Link to={"/products"}>
                                    <ProductConsumer>
                                        {value=>{
                                            return(
                                                <GiGuitar onClick={()=>value.clearCart()} className="purchase-icon"/>
                                            )
                                        }}
                                    </ProductConsumer>

                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default PurchaseConfirmation;
