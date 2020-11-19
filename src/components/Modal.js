import React, {Component} from 'react';
import {ButtonContainer} from "./button";
import {ProductConsumer} from "../Context";
import {Link} from "react-router-dom";

class Modal extends Component {

    state ={
        text:"fuck you",
        class: "btn-danger"
    };

    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const {closeModal,isModalOpen} = value;
                    const {img,title,price} = value.modalProduct;

                    if(!isModalOpen){
                        return null;
                    }else{
                        return (
                            <div className={"modalWrapper"} >
                             <div className={"container"}>
                                <div className="row">
                                    <div id={"modal"} className="p-5 col-8 mx-auto col-md-6 col-lg-4 text-center align-self-center ">

                                            <h1 className="font-weight-bold">ADDED TO CART</h1>
                                            <img className={"modalImage mx-auto mt-5"} src={img} alt=""/>
                                            <h3 className="mt-2 text-blue"><strong>$ </strong>{price}</h3>
                                            <h3 className="mt-3">{title}</h3>

                                        <Link to={"/products"}>
                                            <ButtonContainer onClick={()=>{closeModal()}}>
                                                Guitars
                                            </ButtonContainer>
                                        </Link>

                                        <Link to={"/cart"}>
                                            <ButtonContainer cart onClick={()=>closeModal()}>
                                                Cart
                                            </ButtonContainer>
                                        </Link>

                                    </div>
                                </div>
                             </div>
                            </div>
                        )
                    }
                }}


            </ProductConsumer>
        );
    }
}

export default Modal;
