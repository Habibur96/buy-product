import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Stock.css'


const Stock = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://aaaaaaa.free.beeceptor.com')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // useEffect(() => {
    //     const saveedCart = [];
    //     for (const id in products) {
    //         const addedProduct = products.find(product => product.id === id);
    //         if (addedProduct) {
    //             // const quantity = products[id];
    //             // addedProduct.quantity = quantity;
    //             saveedCart.push(addedProduct)
    //         }
    //     }
    //     setCart(saveedCart);
    // }, [products])

    const handleAddToCart = (product) => {
        // console.log('clicked')
        const newCart = [...cart, product];
        // console.log(newCart);
        setCart(newCart);
    }
    return (

        <div>

            <h2 id='heading'>Welcome to our Duronto Cycle Store</h2>
            <div className="stock">
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}>

                        </Product>)
                    }
                </div>

                <div className="cart-container">
                    <h3 id='text'><i>Selected Cycle</i> </h3>
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Stock;



