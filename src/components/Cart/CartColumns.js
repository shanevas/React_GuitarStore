import React, {Component} from 'react';

class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid mt-5 text-center d-none d-lg-block">
                    <div className="row">
                <div className="col-10 mx-auto col-lg-2 d-flex justify-content-center">
                    <p className="text-uppercase text-blue">product</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-blue">name</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-blue">price</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-blue">quantity</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-blue">delete</p>
                </div>

                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-blue">total</p>
                </div>
                    </div>
            </div>
        );
    }
}

export default CartColumns;
