import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import About from "./components/About";
// import Home from "./components/Home";
import Navbar from './components/Navbar';
import 'bootstrap5/src/css/bootstrap.min.css';
// import State   from "./components/state.jsx"
// import UseContext from "./components/UseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <h1>This is my First Element</h1> 
    <p>This is para</p>*/}

    {/* <Home /> */}
    {/* <About /> */}
    <Navbar/>
    {/* <State/> */}
    {/* <UseContext/> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
