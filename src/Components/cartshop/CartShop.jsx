import React, { useContext } from 'react';
import { CartContext } from '../../cartcontext/CartContext';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';


export const CartShop = () => {

    const { cart, removeItem, clear, TotalCart } = useContext(CartContext);

    const EmptyCart = () => {

        return (
            <>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h2>!El carrito está vacio!</h2>
                            <br></br>
                            <NavLink to="/">
                                <button class="btn btn-primary">
                                    Regresa al inicio
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="row">
                            <img class="img-fluid" alt="carrito vacio" src="https://letrasrecortadas.com/carritoVacio.png"/>
                        </div>
                    </div>
                </div>
            </>

        );
    };

    const CartView = () => {

        return (
            <>
                <h2>Cart</h2>
                <ul>
                    {cart.map((element) => (
                        <div class="row" key={element.item.id}>
                            <div class="col">
                                <h2>{element.item.title}</h2>
                            </div>
                            <div class="col">
                                <p>Cantidad: {element.quantity}</p>
                            </div>
                            <div class="col">
                                <p>Precio por unidad: <strong>$ {element.item.price} </strong></p>
                            </div>
                            <div class="col">
                                <p>
                                    Precio total:{" "}
                                    <strong>${element.item.price * element.quantity}</strong>
                                </p>
                            </div>
                            <div class="col">
                                <button className="btn btn-primary"  variant = "danger" onClick={() => removeItem(element.item.id)}>Eliminar</button>
                            </div>
                        </div>
                    ))}
                </ul>
                <div class="row">
                    <div class="col">
                        {" "}
                        <h2> Total: ${TotalCart()}</h2>{" "}
                    </div>
                    <div class="col">
                        {" "}
                        <button class="btn btn-primary" onClick={() => clear()}>Vaciar carrito</button>{" "}
                    </div>
                    <div class="col">
                        <Link to="/checkout">
                            <button class="btn btn-primary">Ir al checkout</button>
                        </Link>
                    </div>
                </div>
            </>

        );

    };


    return (
        <>

            {cart.length === 0 ? EmptyCart() : CartView()}

        </>)

};