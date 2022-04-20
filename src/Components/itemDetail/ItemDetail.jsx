import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../cartcontext/CartContext';
import Swal from 'sweetalert2';


export const ItemDetail = ({ products }) => {

    //importar del context el metdo addItem

    const { addItem } = useContext(CartContext);

    const [confirm, setConfirm] = useState(false);

    const onAdd = (valor) => {

        Swal.fire(`Has agregado  ${valor} productos al carrito`);
        setConfirm(true);
        console.log(products)
        addItem(products, valor)
    }


    return (
        <>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-6 bg-light p-3 border">
                        <div class="card">
                            <img src={products.pictureUrl} class="card-img-top" alt="img" />
                            <div class="card-body">
                                <h5 class="card-title">{products.title}</h5>
                                <p class="card-text"> {products.description}<br />
                                    ${products.price}
                                </p>
                            </div>
                            {!confirm ? <ItemCount onAdd={onAdd} initial={"1"} stock={"5"} /> :
                                
                            <div class="container">
                                <div class="row">
                                    <div class ="col">
                                        <Link to="/"><button class="btn btn-primary">Continuar</button></Link>{' '}
                                        <Link to="/cart"><button class="btn btn-primary">Finalizar compra</button></Link>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail