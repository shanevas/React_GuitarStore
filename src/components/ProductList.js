import React, {Component} from 'react';
import Product from "./Product";
import Title from "./Title";

import {ProductConsumer} from "../Context";

class ProductList extends Component {


    render() {

        return (
            <React.Fragment>
                <div className="py-5 productListMain">
                    <div className="container pt-5">
                        <Title name="Our" title={"Products"}></Title>
                        <div className="row mt-5">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map(product =>{
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;
