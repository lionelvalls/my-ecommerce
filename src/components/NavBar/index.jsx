import React from "react";
import CartWidget from  '../CartWidget'
import './navBar.css'

export const NavBar = () => {
    return (
        <header className= "header"> 
            <div className="header__container">
                
                <img src = '/favicon.ico' alt="logo" />
                

                <nav className="header__nav">
                        <a className="nav__link" href="#">Comprar</a>
                        <a className="nav__link" href="#">Vender</a>
                        <a className="nav__link" href="#">
                            <CartWidget />
                        </a>
                    
                </nav>
            </div>
        </header>
    );
}
export default NavBar;