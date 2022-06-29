import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {

    if (product) {
        const { name, id, price, img } = product;

        return (
            <div className="product">

                <img src={img} alt=""></img> <hr />
                <div >
                    <h5 id='name'>Name: {name}</h5>
                    <h5 id='id'>Id: {id}</h5>
                    <h5 id='price'>Price: ${price}</h5>

                </div>

                <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>

                </button>
            </div>
        );
    }
};

export default Product;