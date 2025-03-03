import React from 'react';

function Drive(props) {
    return (
       <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <img src="Images/pc.png" alt="pc" />
                </div>
                <div className="col-8">
                    <span>Consolidated data</span>
                    <h2>Drive your project forward, successfully</h2>
                    <p>Podio transforms your project data into one tool to align all content, conversations, and process into one collaboration point</p>
                    <button className='mybtn'>Learn More</button>
                </div>
            </div>
        </div>
       </>
    );
}

export default Drive;