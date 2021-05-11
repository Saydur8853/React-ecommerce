import React from 'react';
import Header from './components/Navbar/Header'
import Products from './components/Products'
import Cart from './components/Cart'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {DataProvider} from './components/DataProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Details from './components/Details'
import Home from './components/Home/Home'
function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>

        <Header/>

        <section>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="product/:id" element={<Details/>}/>
            <Route path="Cart" element={<Cart/>}/>
          </Routes>  
        </section>

      </Router>
    </div>
    </DataProvider>
  );
}



export default App;
