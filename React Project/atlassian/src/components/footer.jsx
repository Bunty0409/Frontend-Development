import React from 'react';

export default function Footer() {
  return (
    <div className="container-fluid pt-5 footer overflow-hidden">
      <div className="row p-2">
        <div className="col-12 col-md-3">
          <div className="row justify-content-center pb-2">
            <img src="Images/logos-atlassian-logo-gradient-horizontal-neutral.svg" alt="" />
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="row">
            <div className="col-6 col-md-3">
              <h6 style={{ fontWeight: 'bold' }}>PRODUCTS</h6>
              <ul className="list-unstyled">
                <li>Jira Software</li>
                <li>Jira Align</li>
                <li>Jira Service Management</li>
                <li>Jira Product Discovery</li>
                <li>Confluence</li>
                <li>Trello</li>
                <li>Bitbucket</li>
              </ul>
              <a href=" ">View all products</a>
            </div>
            <div className="col-6 col-md-3">
              <h6 style={{ fontWeight: 'bold' }}>RESOURCES</h6>
              <ul className="list-unstyled">
                <li>Technical Support</li>
                <li>Purchasing & licensing</li>
                <li>Atlassian Community</li>
                <li>Knowledge base</li>
                <li>Marketplace</li>
                <li>My Account</li>
              </ul>
              <a href=" ">Create support ticket</a>
            </div>
            <div className="col-6 col-md-3">
              <h6 style={{ fontWeight: 'bold' }}>EXPAND & LEARN</h6>
              <ul className="list-unstyled">
                <li>Partners</li>
                <li>Training & Certification</li>
                <li>Documentation</li>
                <li>Developer Resources</li>
                <li>Enterprise services</li>
                <li>My Account</li>
              </ul>
              <a href=" ">View all resources</a>
            </div>
            <div className="col-6 col-md-3">
              <h6 style={{ fontWeight: 'bold' }}>ABOUT ATLASSIAN</h6>
              <ul className="list-unstyled">
                <li>Company</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Blogs</li>
                <li>Atlassian Foundation</li>
                <li>Investor Relations</li>
                <li>Trust & Security</li>
              </ul>
              <a href=" ">Contact us</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row py-3">
          <div className="col-md-8 d-md-flex justify-content-between  ">
            <select className="mr-3 mt-2 mt-md-0 w-25 border-0 ">
              <option value="">English</option>
              <option value="">Spanish</option>
              <option value="">French</option>
            </select>
              <div>Privacy policy</div>
              <div>Terms</div>
              <div>Impressum</div>
              <div>Copyright © 2023 Atlassian</div>
            </div>
          
          <div className="col-md-4 d-flex justify-content-end me-0 align-items-center mt-2 mt-md-0">
            <i className="fa fa-facebook-square mx-2 fs-2"></i>
            <i className="fa fa-twitter-square mx-2 fs-2" ></i>
            <i className="fa fa-linkedin-square mx-2 fs-2" ></i>
            <i className="fa fa-youtube mx-2 fs-2"></i>
          </div>
        </div>
      </div>
      </div>
  
  );
}
