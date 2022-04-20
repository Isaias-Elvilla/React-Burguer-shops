import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../Firebase/firebase";


export const ItemDetailContainer = () => {
  const onAdd = (valor) => {
    alert(`Has agregado ${valor} productos al carrito`);
  }


  const { id } = useParams();
  const [item, setItem] = useState({});
  const [flag, setflag] = useState(false);

  // Remplazo la llamada a json local por la  de firebase

  useEffect(() => {
    async function getData() {
      const db = getFirestore();
      const COLLECTION = db.collection("ColeccionProductos");
      const RESPONSE = await COLLECTION.get();
      const p = RESPONSE.docs.map((element) => element.data());
      console.log(p);

      let aux = p.find((element) => element.id === parseInt(id));

      setItem(aux);
      console.log(aux);
      setflag(true);
    }
    getData();
  }, [id]);

  return (

    <>
      {
        flag ?
          (<ItemDetail products={item} onAdd={onAdd} initial={1} stock={5} />)
          :
          (<div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>)
      }
    </>
  )
}

export default ItemDetailContainer