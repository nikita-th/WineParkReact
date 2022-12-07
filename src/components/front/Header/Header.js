import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
    return (
        <header className="header">
            <div>
                <h1>
                    <Link to="/" className="logo">
                        Wine Park
                    </Link>
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/show">Show</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className="cart">
                            <i className='fa fa-shopping-cart'/>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
};
export default Header;