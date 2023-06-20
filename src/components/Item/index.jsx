import { Link } from 'react-router-dom';
import './item.css';
import React from 'react';
const Item = ({id, image, title, price, category }) => {
    
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {title}
                </h2>
            </header>
        <picture>
            <img src={image} alt={title} className='ItemImg'/>
        </picture>
        <section>
            <p className='Info'>
                Precio: ${price}
            </p>
            
            <p className='Info'>
                Condicion: {category}
            </p>
        </section>
        <footer className='ItemFooter'>
            <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
        </footer>
        </article>
    );
     
}
export default Item;
