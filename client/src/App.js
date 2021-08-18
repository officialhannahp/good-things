import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import TopHandler from './views/TopHandle'
import About from './views/About';
import Contact from './views/Contact'
import Shop from './views/Shop'
import Upload from './views/Upload'
import ProductDetail from './views/ProductDetail';
import React, { useState } from 'react';
import Cart from './views/Cart';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <TopHandler />
      <Router>
        <Main path="/" />
        <About path="/about" />
        <Contact path="/contact" />
        <Shop path="/shop" />
        <Upload path="/upload" />
        <ProductDetail path="/jewelry/:id" 
          cart={cart}
          setCart={setCart}
        />
        <Cart path="/cart" 
          cart={cart}
          setCart={setCart}
        />
      </Router>
    </div>
  );
}

export default App;
