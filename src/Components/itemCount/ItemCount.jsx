import React, { useState } from 'react'

const style = {
  width: 'auto',
  height: 'auto',
  flex: 1,
  flexDirection: 'column',
  textAlign: 'center',
}

export const ItemCount = ({ initial, stock, onAdd, products }) => {
  const [valor, setValor] = useState(initial);

  function onAgre() {
    if (valor < stock) {
      setValor(Number(valor) + 1);
    }
  }

  function onRest() {
    if (valor > 1) {
      setValor(Number(valor) - 1);
    } else {
      alert("La cantidad no puede ser menor que 1 articulo")
    }
  }

  const clearState = () => {
    setValor('1')
  }


  return (
    <div style={style}>
      <button className="btn btn-danger" onClick={onRest}>-</button>
      <input  type="text" value={valor}/>
      <button className="btn btn-primary" onClick={onAgre}>+</button>
      <button className="btn btn-secondary" onClick={clearState} >Restablecer</button>
      <p>Stok:{stock}</p>
      <button className="btn btn-success" onClick={()=>{onAdd(valor,products)}}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount