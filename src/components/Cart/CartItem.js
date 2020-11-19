import React, {Component} from 'react';
import { RiDeleteBin2Fill } from "react-icons/ri";

class CartItem extends Component {



    render() {


        const {img,title,id,price,total,count} = this.props.item;
        const {increment,decrement,removeItem} = this.props.value;





        return (
            <div className="row mt-5 pb-5 text-capitalize mx-auto ">

                <div className="col-10 col-lg-2 mx-auto d-flex justify-content-center">
                    <img className="img-fluid mx-auto" src={img} style={{width:'5rem',height:'5rem'}} alt=""/>
                </div>

                <div className="col-10 col-lg-2 mx-auto d-flex justify-content-center">
                    <h5 className="text-white">{title}</h5>
                </div>

                <div className="col-10 mx-auto col-lg-2 d-flex justify-content-center">
                    <h5 className="text-white"><strong>$ </strong>{price}</h5>
                </div>

                <div className="col-10 col-lg-2 mx-auto d-flex justify-content-center">
                    <div>
                        <span className="btn-white text-white mx-1" onClick={()=>{decrement(id);}}>-</span>
                    </div>

                    <div>
                        <span className="btn-white text-white mx-1">{count}</span>
                    </div>

                    <div>
                        <span className="btn-white text-white mx-1" onClick={()=>{increment(id);}}>+</span>
                    </div>

                </div>

                <div className="col-10  mx-auto col-lg-2 d-flex justify-content-center ">
                        <RiDeleteBin2Fill className="deleteIcon" onClick={()=>{removeItem(id)}}/>
                </div>

                <div className="col-10 mx-auto col-lg-2 d-flex justify-content-center">
                        <strong className="text-white">item total: ${total}</strong>
                </div>
                
            </div>
        );
    }
}

export default CartItem;
