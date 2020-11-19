import React, {Component} from 'react';
import {FaBomb} from "react-icons/fa";
import {Link} from 'react-router-dom';

class Default extends Component {
    render() {
        return (
            <div className="default-wrapper">

                <div className="container ">
                    <div className="row mx-auto max-height align-items-center">
                        <div className="col-12 mx-auto">
                            <div className="mx-auto d-flex justify-content-center">
                                <div>
                                    <Link to={"/"}>
                                    <FaBomb className="default-icon"/>
                                    </Link>
                                </div>

                            </div>
                            <h1 className="text-center mt-5 text-white">No Guitars Here</h1>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Default;
