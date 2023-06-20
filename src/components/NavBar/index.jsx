import CartWidget from  '../CartWidget'
import './navBar.css'
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <header className= "header"> 
            <div className="header__container">
                <img src = '/favicon.ico' alt="logo" />
                
                <nav className="header__nav">
                    <Link to='/'>
                        <h3>Vehiculos</h3>
                    </Link>
                    <div className="categorias">
                        <NavLink to={`/category/Usados`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Usados</NavLink>
                        <NavLink to={`/category/Nuevos`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Nuevos</NavLink>
                    </div>
                    <CartWidget />  
                </nav>
            </div>
        </header>
    );
}
export default NavBar;