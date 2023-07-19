import React from 'react';
import Home from './Home';
import About from './About';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Api from "./Api"
import UseContext from './UseContext';
import State from './state';

function Navbar(props) {
    const MenuData = {'/home':'Home','/about':'About','/api':'Api','/usecontext':'UseContext','/state':'State'};
    const ResultData = Object.entries(MenuData).map((res,i)=>{
        console.log(i);
        return <li className="nav-item" key={i}>
        <Link className='nav-link' to={res[0]}>{res[1]}</Link>
    </li>
    }) 
    return (
        <>
        <Router>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Company Name</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            
                            {ResultData}
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/api" element={<Api/>}></Route>
                <Route path="/state" element={<State/>}></Route>
                <Route path="/usecontext" element={<UseContext/>}></Route>
            </Routes>
</Router>
        </>
    );
}

export default Navbar;


// npm i react-router-dom
// rsf => react function component
// <> </> => fragment
