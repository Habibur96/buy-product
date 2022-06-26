import React, { useEffect, useState } from 'react';
// import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Stock.css'


const Stock = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://duronto.free.beeceptor.com')
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
                    {/* <Cart cart={}></Cart> */}
                </div>
            </div>

        </div>
    );
};

export default Stock;



