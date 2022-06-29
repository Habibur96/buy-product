import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Stock.css'

const Stock = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartt, setCartt] = useState([]);

    useEffect(() => {
        fetch('https://fackbycycle.free.beeceptor.com')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        // console.log('clicked')
        const newCart = [...cart, product];
        const new2Cart = [...cartt, product];
        // console.log(newCart);
        console.log(new2Cart);
        setCart(newCart);
        setCart(new2Cart);
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
                    <Cart
                        cart={cart}
                        cartt={cartt}
                    ></Cart>

                </div>
            </div>
            <div className='question'>
                <h3>1. Difference etween props vs state.</h3>
                <h4><i>Props:</i>
                    <h4>1. The data is passed from one component to another. </h4>
                    <h4>2. It is Immutable</h4>
                    <h4>3. Props are read only</h4>
                </h4>

                <h4><i>State:</i>
                    <h4>1. The data is passed within the component only.. </h4>
                    <h4>2. It is Mutable</h4>
                    <h4>3. State is both read and write.</h4>
                </h4>

                <h3>2. How useState works?</h3>
                <h4 id='question2'>useState is a Hook(function) that allows we to have state variables in functional components. We pass the initial state to this function and it returns a variable with the current state value and another function to update this value.</h4>



                <p></p>
            </div>


        </div>
    );
};

export default Stock;



