import './navBar.css';
import { useContext } from "react"
import CartWidget from  '../CartWidget/';

import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <header className= "header"> 
            <div className="header__container">  
                <Link to='/'>
                        <img src = '../../img/logo.png' alt="logo" />
                    </Link>
                
                <nav className="header__nav">
                    <Link to='/'>
                        <h3>Vehiculos</h3>
                    </Link>
                    <div className="categorias">
                        <NavLink to={"/Category/Usados"} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Usados</NavLink>
                        <NavLink to={"/Category/Nuevos"} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Nuevos</NavLink>
                    </div>
                    <CartWidget />  
                </nav>
            </div>
        </header>
    );
}
export default NavBar;