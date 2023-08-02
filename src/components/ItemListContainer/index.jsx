import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import ItemList from '../ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams()

  useEffect(() => {
    const productosRef = collection(db, "productos")
    const q = categoryId 
                ? query(productosRef, where("category", "==", categoryId))
                : productosRef
    getDocs(q)
        .then((resp) => {
            const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
            setProducts(items)
        })
        .catch(e => console.log(e))
        .finally(() => setLoading(false))

}, [categoryId])

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
