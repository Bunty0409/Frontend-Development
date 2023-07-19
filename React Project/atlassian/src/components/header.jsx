import React from 'react'

export default function Header() {
  return (
    <>
    <div className="container-fluid header d-flex align-items-center mb-5 ">
    <div className="col-lg-12 row text-center text-white h overflow-hidden">
            <h1>Impossible alone.</h1>
            <b>Possible together.</b>
            <h3>See how collaboration makes the impossible, possible.</h3>
            <span><i className="fa fa-play-circle"></i> Play video</span>
            <div className=" d-sm-flex flex-sm-column flex-lg-row align-items-center f">
            <img src="Images/Team23_Official_white_Large (1).svg" alt="" />
            <p>Catch up on what you missed at Team '23! Sessions are now available on demand.</p>
            <h6>Watch now</h6>
          </div>
          </div>
          
    </div>
    
      {/* <div className="container-fluid header d-flex align-items-center">
        <div className="row position-relative ">
          <div className="col-lg-12 row text-center text-white h">
            <h1>Impossible alone.</h1>
            <b>Possible together.</b>
            <h3>See how collaboration makes the impossible, possible.</h3>
            <span><i className="fa fa-play-circle"></i> Play video</span>
          </div>
          <div className="d-flex align-items-center flex-column  position-absolute  f">
            <img src="Images/Team23_Official_white_Large (1).svg" alt="" />
            <p>Catch up on what you missed at Team '23! Sessions are now available on demand.</p>
            <h6>Watch now</h6>
          </div>
        </div>
      </div> */}
    </>
  )
}
