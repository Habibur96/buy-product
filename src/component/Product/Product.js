import React from 'react';
import './Product.css'

const Product = ({ product }) => {

    if (product) {
        const { name, id, price, img } = product;

        return (
            <div className="product">

                <img src={img} alt=""></img> <hr />
                <div className="product-info">
                    <h5>Name: {name}</h5>
                    <h5>Id: {id}</h5>
                    <h5>Price: ${price}</h5>

                </div>



            </div>
        );
    }
};

export default Product;