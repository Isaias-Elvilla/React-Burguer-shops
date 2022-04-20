import { CardProduct } from "../CardProduct/CardProduct";
import React from 'react';

export const ItemList = ({ products }) => {

    return (
        <>
            <div class="container">
                <div class="row justify-content-start">
                    {products.map(product => {
                        return <div class="col-4"> <CardProduct product={product} /> </div>
                    })
                    }
                </div>
            </div>
        </>


    )


};