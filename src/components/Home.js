import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div  className="home-wrapper">
                <div className="container">
                    <div className="row mx-auto max-height align-items-center">
                        <div className="col-10 mx-auto">
                            <h1 className="text-white text-center text-uppercase home-title">Guitar Store</h1>
                            <div className="d-flex justify-content-center mt-3">
                                <Link to={'/products'}>
                                    <button className="home-btn text-blue">Guitars</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
