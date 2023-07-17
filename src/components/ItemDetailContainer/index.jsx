import { useState, useEffect } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import ItemDetail from "../ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'productos', itemId); // Actualiza el nombre de la colección a "productos"
        const docSnapshot = await getDoc(productRef);

        if (docSnapshot.exists()) {
          setProduct({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.error('No existe ningún producto con el ID especificado.');
        }
      } catch (error) {
        console.error('Error retrieving product from Firebase:', error);
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div className='ItemDetailContainer'>
      {product ? <ItemDetail {...product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ItemDetailContainer;
