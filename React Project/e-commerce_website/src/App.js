import React from 'react';
import './App.css';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Products from './components/Products';
import Contacts from './components/Contacts';
import Cart from './components/Cart';
import SingleProduct from './components/SingleProduct';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/contacts' element={<Contacts/>}></Route>
      <Route path='/singleproduct/id:' element={<SingleProduct/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='*' element={<ErrorPage/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
