import React, {Component} from 'react';

class EmptyCart extends Component {
    render() {
        return (
            <div className="container pt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center">
                        <h1 className="text-white pt-5">Empty Cart</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmptyCart;
