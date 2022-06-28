import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart);
    // console.log(cart.name);

    for (const product of cart) {
        // console.log(product.name)


        return (
            <div className='cart'>


                <p><b> Name: {product.name}</b></p>
                <h3>price: ${product.price}</h3>
                <h3>Id: {cart.id}</h3>
                <h3>Price: {cart.price}</h3>
                <button  >Choose one for me</button> <br />
                <button >Choose again</button>

            </div>
        );
    }
};

export default Cart;