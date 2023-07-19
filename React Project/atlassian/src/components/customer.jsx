import React, { useState } from "react";
import CustomerApi from "./APIS/customerApi";

export default function Customer() {
  const [API] = useState(CustomerApi);
  console.log(API);
  return (
    <>
      <div className="container-fluid my-5 cus-bg overflow-hidden">
        <div className="row text-center">
          <div className="col-lg-12">
            <h4 className="px-2">
              Join the 250,000+ companies that use our software to power team
              collaboration
            </h4>
            <span className="text-primary">
              <i className="fa fa-play-circle"></i> Watch a customer story
            </span>
          </div>
        </div>
        <div className="row">
          {API.map((res, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 cus-img" key={index}>
              <img className="img-fluid" src={res.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
