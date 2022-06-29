import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({ cart, cartt }) => {
    // console.log(cart);
    // console.log(cartt);

    for (const product of cart) {
        // console.log(product.name)
        return (
            <div className='cart'>

                <p><b><img src={product.img} alt=""></img>Name:{product.name} <p><b>price: {product.price}</b></p>    <button><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button></b></p>

                <button >Choose one for me</button> <br />
                <button >Choose again</button>
            </div>

        );

    }

};

export default Cart;