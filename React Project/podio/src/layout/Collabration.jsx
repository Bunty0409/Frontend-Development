import React, { useState } from 'react';
import Collabrate from "./api/CollabrateAPI"

function Collabration(props) {
    const [API] = useState(Collabrate)
    console.log(API);
    return (
       <>
       <div className="container text-center mt-5 collbrate">
        <span>Fast setup, full control</span>
        <h2>Tighter collaboration for greater durability</h2>
        <p>Clearly defined roles and a custom tool fitted to how your team works best will help improve delivery time, effectiveness and relationships.</p>
        <div className="row mt-5">
            {API.map((res)=>{
                return <div className="col-4">
                <h3>{res.title}</h3>
                <img src={res.image} alt="" />
                <p>{res.info}</p>
            </div>
            })}
            
        </div>
       </div>
       </>
    );
}

export default Collabration;