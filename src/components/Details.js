import React, {Component} from 'react';
import {ProductConsumer} from "../Context";
import {Link} from 'react-router-dom';
import { ButtonContainer} from "./button";

class Details extends Component {


    render() {
        return (
            <div className="py-5 detailsPage">
                <ProductConsumer>
                    {value=>{
                        const {id,company,price,title,inCart,info,img} = value.detailedProduct;
                        return(
                            <div className="container py-5">

                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-white">
                                        <h1>{title}</h1>

                                        <img className="mt-5 details-image" src={img} alt=""/>

                                        <h1 className="mt-5"><strong>Price: $</strong>{price}</h1>

                                        <p className="mt-3">{info}</p>

                                        <h4>This product is made by <strong>{company}</strong></h4>

                                        <div className="mt-5 d-flex justify-content-center">
                                            <Link to={"/products"}>
                                                <ButtonContainer className="main-Btn-Style">Guitars</ButtonContainer>
                                            </Link>

                                            <ButtonContainer cart onClick={()=>{value.addToCart(id); value.openModal(id);}} className="main-Btn-Style" disabled={inCart || inCart===undefined}>{inCart?"In cart":"Buy"}</ButtonContainer>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        )
                    }}
                </ProductConsumer>
            </div>
        );
    }
}

export default Details;
