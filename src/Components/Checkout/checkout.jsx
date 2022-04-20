import React, { useState, useContext } from "react";
import { getFirestore } from "../../Firebase/firebase";
import Swal from "sweetalert2";
import { CartContext } from "../../cartcontext/CartContext";
import { FiCheck } from 'react-icons/fi';

export const Checkout = () => {
    const { cart, TotalCart } = useContext(CartContext);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    //Definir una funcion para confirmar la orden y validar campos del formulario

    const confirmCart = () => {
        if (!name) {
            Swal.fire(
                "😓 Ingresa tu nombre para completar el checkout.",
                "",
                "error"
            );
            return;
        }
        if (!email.includes("@")) {
            Swal.fire(
                "😓 Ingresa un email válido para completar el checkout.",
                "",
                "error"
            );
            return;
        }
        if (!phone) {
            Swal.fire(
                "😓 Ingresá un teléfono para completar el checkout.",
                "",
                "error"
            );
            return;
        }
        if (!lastName) {
            Swal.fire(
                "😓 Ingresá un apellido para completar el checkout.",
                "",
                "error"
            );
            return;
        }
    };

    const cancelCourse = () => {
        document.getElementById("course-form").reset();
    };

    const createOrder = (name, lastName, email, phone) => {
        const order = {
            buyer: { name, lastName, email, phone },
            item: cart,
            total: TotalCart(),
        };
        const db = getFirestore();
        db.collection("orders")
            .add(order)
            .then((response) => {
                Swal.fire({
                    title: "Orden creada",
                    text: "El ID de su orden es: " + response.id,
                    icon: "success",
                });

                confirmCart();
                cancelCourse();
            });
    };




    return (
        <>
            <div class="container">
                <div class="row justify-content-md-center">
                    {" "}
                    <h2 className="display-3">Datos del comprador</h2>{" "}
                </div>
                <form id="course-form">
                    <div class="row justify-content-md-center">
                        <div class="col" lg={4}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                onInput={(event) => setName(event.target.value)}
                                controlId="Checkout.name"
                            ></input>
                        </div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col" lg={4}>
                            <input
                                type="text"
                                name="last name"
                                placeholder="Apellido"
                                onInput={(event) => setLastName(event.target.value)}
                                controlId="Checkout.LastName"
                            ></input>
                        </div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col" lg={4}>
                            {" "}
                            <input
                                type="tel"
                                name="Telephone"
                                placeholder="Telefono"
                                onInput={(event) => setPhone(event.target.value)}
                                controlId="Checkout.phone"
                            ></input>
                        </div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col" lg={4}>
                            {" "}
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                onInput={(event) => setEmail(event.target.value)}
                                controlId="Checkout.email"
                            ></input>
                        </div>
                    </div>
                </form>
            </div>
            <div class="container">
                <div class=" row py-2 justify-content-md-center "  >
                    <div class="col" lg={4}>
                        <button class="btn btn-primary"
                            type="submit"
                            onClick={() => {
                                createOrder(name, lastName, phone, email);
                            }}
                        >
                            {" "}
                            Terminar compra{" "}<FiCheck />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

