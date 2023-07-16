import './ItemDetail.css'
import { useContext, useState } from 'react';
import React from "react";
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


   const ItemDetail = ({id, image, title, price, category }) => {
    const [quatityAdded, setQuantityAdded]= useState(0)

    const { addItem } = useContext(CartContext)
   
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, title, price
        }
        addItem(item, quantity)
    }

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
                {
                    quatityAdded > 0 ?(
                        <Link to ='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
            </article>
        );
}

export default ItemDetail;