import { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import ItemList from '../ItemList';

const ItemListContainer = ({ categoryId}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const asyncFunc = async (categoryId) => {
    try {
      const productsRef = collection(db, 'productos');
      const q = query(productsRef, where('category', '==', categoryId));
      const querySnapshot = await getDocs(q);

      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });

      return products;
    } catch (error) {
      throw new Error('Error retrieving products from Firebase: ' + error.message);
    }
  };

  useEffect(() => {
    setLoading(true);

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>Welcome</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
