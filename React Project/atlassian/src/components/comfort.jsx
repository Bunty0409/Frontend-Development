import React, { useState } from "react";
import ComfortApi from "./APIS/comfortApi";

export default function Comfort() {
  const [API] = useState(ComfortApi);
  console.log(API);
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row u">
        <div className="col-lg-4 col-sm-12 p-5">
          <h6 className="p-2 text-primary">TEAM ESSENTIALS</h6>
          <h2 className="p-2">
            Explore resources to unleash the potential of your team
          </h2>
        </div>
        <div className="col-md-8">
          <div className="row comfort-img mx-auto">
            <div className="comfort-img"></div>
            <div className="text-center p-3 comfort-text-bg">
              <h3>Atlassian Community</h3>
              <p>
                Connect globally and meet locally to get more out of our
                products.
              </p>
              <div className="row">
                <div className="col-6">
                  <h6 className="text-primary">Search the forum</h6>
                </div>
                <div className="col-6">
                  <h6 className="text-primary">Join our community</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid z">
        <div className="row">
          {API.map((res, index) => (
            <div className="col-lg-4 col-md-6 p-3" key={index}>
              <div className="card">
                <img src={res.img} alt="img" />
                <div className="card-body text-center">
                  <h4 className="text-primary">{res.title}</h4>
                  <p>{res.info}</p>
                  <h6 className="text-primary">{res.more}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row r p-md-5 p-sm-0">
        <div className="col-md-4 p-5">
          <h6 className="text-primary">TEAM ESSENTIALS</h6>
          <h2>Explore resources to unleash the potential of your team</h2>
          <h6 className="text-primary">Learn more</h6>
        </div>
        <div className="col-md-4 py-2 p-0">
          <img  src="Images/ITSM High Velocity 23.png" alt="" />
        </div>
        <div className="col-md-4 py-2 p-0">
          <img src="Images/Team23_Event2x.png" alt="" />
        </div>
      </div>
    </div>
  );
}
