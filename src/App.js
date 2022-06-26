// import logo from './logo.svg';
import './App.css';
import Cart from './component/Cart/Cart';
import Product from './component/Product/Product';
import Stock from './component/Stock/Stock';

function App() {
  return (
    <div className="App">
      <Stock></Stock>
      <Product></Product>
      <Cart></Cart>
    </div>
  );
}

export default App;
