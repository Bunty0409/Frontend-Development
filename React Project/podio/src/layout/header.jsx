import React, { useState } from 'react'
import HeaderApi from './api/headerapi';

function Header(props) {
    const [API] = useState(HeaderApi)
    console.log(API);
    return (
        <>
        <div className="container-fluid myheader text-white mt-5 p-5">
            <h1>Get your team 
                <br />
                working in sync</h1>
            <p>Build powerful low-code business solutions to customize 
                <br />work and communication</p>
            <div className="mysearch ">
                <input type="text"  placeholder='Enter your work Email'/>
                <button className='serachbtn'>Start Free</button>
            </div>
        </div>
        <div className="container-fluid bg-api">
        <div className="row p-3">
            {API.map((res)=>{
                console.log(res);
                return <div className='col-2 mt-3'>
                    <img src={res.img} alt="" />
                    {/* <p>{res.data}</p> */}
                </div>
            })}
        </div>
        </div>
        </>
    );
}

export default Header;
