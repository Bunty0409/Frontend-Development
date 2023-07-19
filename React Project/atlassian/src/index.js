import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/product';

import Main from './components/main';
import 'bootstrap5/src/css/bootstrap.min.css'
import Teampage from './components/teamPage';
import SupportPage from './components/supportPage';
import "./components/component.css"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Main/> */}
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/main.jsx' element={<Main/>}></Route>
        <Route path='/teamPage.jsx' element={<Teampage/>}></Route>
        <Route path='/supportPage.jsx' element={<SupportPage/>}></Route>

        <Route path='/Product.jsx' element={<Product/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
