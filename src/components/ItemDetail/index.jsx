import React from "react";
import ItemCount from '../ItemCount';


   const ItemDetail = ({id, image, title, price, category }) => {
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
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ' ,quantity)}/>
            </footer>
            </article>
        );
}

export default ItemDetail;