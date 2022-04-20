import { ItemList } from '../itemList/ItemList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../Firebase/firebase";

export const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const { id } = useParams();

  // Remplazo la llamada a json local por la  de firebase

  useEffect(() => {
    async function getData() {
      const db = getFirestore();
      const COLLECTION = db.collection("ColeccionProductos");
      const RESPONSE = await COLLECTION.get();
      const p = RESPONSE.docs.map((element) => element.data());
      let aux = id ? p.filter((element) => element.category === id) : p;
      setProducts(aux);
    }
    getData();
  }, [id]);

  return (
    <div>
      <h1>¡¡Bienvenido a Valiendo Burguer, porque Burguer valemos todos!!</h1>
      <ItemList products={products} />
    </div>
  )
}
