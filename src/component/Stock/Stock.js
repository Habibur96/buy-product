import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Stock.css'


const Stock = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://by-cycle.free.beeceptor.com')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (

        <div>

            <h2>Welcome to our Duronto Cycle Store</h2>
            <div className="stock">
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}>

                        </Product>)
                    }
                </div>

                <div className="cart-container">
                    <h3>Order List</h3>
                </div>
            </div>

        </div>
    );
};

export default Stock;



