import React, { useState } from "react";
import FeatureApi from "./api/featureAPI";

export default function Feature() {
  const [API] = useState(FeatureApi);
  console.log(API);
  return (
    <>
      <div className="row">
        {API.map((res)=>{
          return <>
          <div className="col-3 d-flex align-items-center x">
          <img src={res.image} alt="" />
          <h5>{res.info}</h5></div></>
        })}
      </div>
    </>
  );
}
