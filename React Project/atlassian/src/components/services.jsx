import React, { useState } from "react";
import ServicesApi from "./APIS/servicesApi";

export default function Services() {
  const [API] = useState(ServicesApi);

  const [buttonContent, setButtonContent] = useState("Work Management");
  const [showDiv, setShowDiv] = useState(false);

  const handleRowClick = (rowContent) => {
    setButtonContent(rowContent);
    setShowDiv(false);
  };

  const handleButtonClick = () => {
    setShowDiv(true);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row services">
          <h2 className="text-center">
            Atlassian solutions are designed for all types of work
          </h2>
          <div className="services-btns text-center">
            <div
              className="d-sm-none"
              style={{ position: "relative", zIndex: 100 }}
            >
              <button
                className="btn btn-primary n fs-5 p-3 w-100"
                onClick={handleButtonClick}
              >
                {buttonContent} {<i className="fa fa-angle-down"></i>}
              </button>
              {showDiv && (
                <div className="q mt-2">
                  <div onClick={() => handleRowClick("Work Management")}>
                    Work Management
                  </div>
                  <div onClick={() => handleRowClick("IT Service Management")}>
                    IT Service Management
                  </div>
                  <div onClick={() => handleRowClick("Agile and Dev-ops")}>
                    Agile and Dev-ops
                  </div>
                </div>
              )}
            </div>
            <div className="d-none d-sm-block">
  <button className="btn btn-primary">Work Management</button>
  <button className="btn btn-primary">IT Service Management</button>
  <button className="btn btn-primary">Agile and Dev-ops</button>
</div>

          </div>
        </div>
        <div className="row p-5 d-flex">
          <div className="col-md-4">
            <h3>
              Make work flow across teams while connecting back to company goals
            </h3>
            <a href=" ">Work Differently, together</a>
            <div className="row mt-4">
              {API.map((res, index) => (
                <div className="col-md-12 mt-5 d-flex" key={index}>
                  <div className="col-md-3 g">
                    <img className="service-img" src={res.img} alt="" />
                  </div>
                  <div className="col-md-9">
                    <h4>{res.title}</h4>
                    <span>{res.info}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-8 y">
            <img src="Images/solutions_1_Con_Trello_JWM.svg" alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}
