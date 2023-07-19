// import React from 'react';

// function Slider(props) {
//     return (
//         <>
//             {/* -- Carousel --> */}
//             <div id="demo" classNameName="carousel slide" data-bs-ride="carousel">

//                 {/* -- Indicators/dots --> */}
//                 <div className="carousel-indicators bg-dark  btnindicator">
//                     <button classNameName="btn btn-dark active" type="button" data-bs-target="#demo" data-bs-slide-to="0" ></button>
//                     <button classNameName="btn btn-dark" type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
//                     <button classNameName="btn btn-dark" type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
//                 </div>

//                 {/* -- The slideshow/carousel --> */}
//                 <div classNameName="container-fluid mt-5 slidermain" >
//                     <div classNameName="carousel-inner " style={{ color: "black" }}>
//                         { /*---item1---*/}
//                         <div classNameName="carousel-item active">
//                             <h2> "Discord is where the world builds relationships. Cloudflare Zero Trust Services
//                                 helps us deliver on that mission, connecting our internal engineering team to the
//                                 tools they need. With Cloudflare, we can rest easy knowing every request to our
//                                 critical apps is evaluated for identity and context - a true Zero Trust approach."</h2>
//                             <div classNameName="row mt-5">
//                                 <div classNameName="bottomcaption col-6 ">
//                                     <h3>Mark Smith</h3>
//                                     <h6>Director of infrastructure</h6>
//                                 </div>
//                                 <div classNameName='compImg col-6'>
//                                     <img src="img/companies/logo-discord-color.webp" alt="img" />
//                                 </div>
//                             </div>
//                         </div>
//                         { /*---item2---*/}
//                         <div classNameName="carousel-item">
//                             <h2> “Cloudflare helps DHL Parcel protect our customer data and client communications,
//                                 simplifying compliance with data privacy regulations like GDPR.”</h2>
//                             <div classNameName="row mt-5">
//                                 <div classNameName="bottomcaption col-6 ">
//                                     <h3>Jan De Groot</h3>
//                                     <h6>Vice President of digital business process optimization</h6>
//                                 </div>
//                                 <div classNameName='compImg col-6'>
//                                     <img src="img/companies/DHL_logo_rgb_black_small.webp" alt="img" />
//                                 </div>
//                             </div>
//                         </div>



//                     </div>
//                 </div>
//                 {/* -- Left and right controls/icons --> */}
//                 <button classNameName="carousel-control-prev " type="button" data-bs-target="#demo" data-bs-slide="prev">
//                     <span classNameName="carousel-control-prev-icon"></span>
//                 </button>
//                 <button classNameName="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
//                     <span classNameName="carousel-control-next-icon"></span>
//                 </button>

//             </div>


//         </>
//     )
// };
// export default Slider;


//---------------------------------------//
import React from 'react';

function Slider(props) {
    return (
        <>

<div id="carouselExampleIndicators" class="carousel slide text-inline p-5" data-bs-ride="carousel">
    <div class="carousel-inner p-5">
        <div class="carousel-item active">
            <h2>"Discord is where the world builds relationships. Cloudflare Zero Trust Services helps us deliver on that mission, connecting our internal engineering team to the tools they need. With Cloudflare, we can rest easy knowing every request to our critical apps is evaluated for identity and context - a true Zero Trust approach."</h2>
            <div class="row mt-5">
                <div class="bottomcaption col-6">
                    <h3>Mark Smith</h3>
                    <h6>Director of infrastructure</h6>
                    <div class="compImg col-6">
                        <img src="img/companies/logo-discord-color.webp" alt="img" />
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item p-5">
            <h2>“Cloudflare helps DHL Parcel protect our customer data and client communications, simplifying compliance with data privacy regulations like GDPR.”</h2>
            <div class="row mt-5">
                <div class="bottomcaption col-6">
                    <h3>Jan De Groot</h3>
                    <h6>Vice President of digital business process optimization</h6>
                </div>
                <div class="compImg col-6">
                    <img src="img/companies/DHL_logo_rgb_black_small.webp" alt="img" />
                </div>
            </div>
        </div>
        <div class="carousel-item active">
            <h2>"Discord is where the world builds relationships. Cloudflare Zero Trust Services helps us deliver on that mission, connecting our internal engineering team to the tools they need. With Cloudflare, we can rest easy knowing every request to our critical apps is evaluated for identity and context - a true Zero Trust approach."</h2>
            <div class="row mt-5">
                <div class="bottomcaption col-6">
                    <h3>Mark Smith</h3>
                    <h6>Director of infrastructure</h6>
                    <div class="compImg col-6">
                        <img src="img/companies/logo-discord-color.webp" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bg-success"  aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bg-success" aria-hidden="true"></span>
        <span class="sr-only ">Next</span>
    </a>
</div>

        </>
    );
}

export default Slider; 