import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FaGuitar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";




class Navbar extends Component {

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <Link to={"/"}>
                    <span className="navbar-brand "><FaGuitar className={"navbarIcon"} /></span>
                </Link>


                {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"*/}
                {/*        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*    <span className="navbar-toggler-icon"></span>*/}

                {/*</button>*/}

                <ul  style={{listStyleType:"none"}} className=" ml-auto d-flex justify-content-center my-auto">
                    <li>
                        <Link to={"/products"} className="nav-link">Products</Link>
                    </li>

                    <li>
                        <Link to={"/cart"} className="nav-link">Cart
                            <span className="ml-2"><FaShoppingCart/></span>
                        </Link>
                    </li>

                </ul>

            </nav>
        );
    }
}

export default Navbar;



