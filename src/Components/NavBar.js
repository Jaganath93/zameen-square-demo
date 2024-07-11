import { useState } from "react";
import { data } from "../data";


export const NavBar = ({location,setLocation})=>{
    
    const logo = "https://zameensquare.com/_next/static/media/zameen-logo.be926326.png";
    const logo_md = "https://zameensquare.com/_next/static/media/zameen-mob-logo.74a5a37e.png";

    

    const handleLocation = (location)=> setLocation(location);



    return(
        <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top bg-light">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
    <div className="d-flex justify-content-between">
      <div>
      <img src={logo} alt="Logo" className="d-inline-block align-text-top d-none d-lg-block nav-logo"/>
      <img src={logo_md} alt="Logo" className="d-inline-block align-text-top d-block d-lg-none nav-logo"/>
      </div>
      <div className="mt-2">
      <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle bg-white text-dark border-0 ms-2" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    {location}
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    {data.map((dt,i)=> <li class="dropdown-item" key={i} onClick={()=>handleLocation(dt.location)}>{dt.location}</li>)}
  </ul>
</div>
      </div>
      </div>
    </a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
      {/* <span className="navbar-toggler-icon"></span> */}
    {/* </button> */}
    <div className="d-flex">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item me-4">
          <a className="nav-link text-primary" aria-current="page" href="#">Buy</a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link text-primary" href="#">Rent</a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link text-primary" href="#">Sell</a>
        </li>
      </ul>
      {/* <div className="d-flex"> */}
        
      {/* </div> */}
    </div>
    <button className="btn btn-primary">Post Property</button>
    {/* <a className="navbar-brand" href="#">
      <img src="https://s3-alpha-sig.figma.com/img/65f2/87db/7052c26fc3613af9921d95f82d75b2a1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bz8fhyK6Ut5vBn-aTaeW5oSO4qnjAaBBPBi8U5nWlX4cpUWfi6eXOSDhTAD1~~XV2XtqQT4hXudmaAQMEmrnFSqA9oxKDhFID6w001sQpmGu9foOWN~JDzws5yaPhma4bpWibja43MP0F7zbYM~yRd-t-XGwabM5MvsyDpOvVjHM-atkNRnUPVNHvhWdZl-Nr7ffH1zu6oFvHWOtvNaBgz7lbaP7mLco7e4On5NQWc1l15w1CE5wvm2NTBjJBQq76fJjQqDRfR3xfeDhPmGh-KDx~43wIsxitcDjrv8YOgNcAAhZeC0o3DfEOXjVTXwIuQ90KabEVduLR9U3IGgz8w__" alt="profile"/>
    </a> */}
    </div>
  </div>
</nav>
    );
}

{/* <div>
            <div classNameName="row d-flex flex-row justify-content-around">
                <div classNameName="col-4 d-flex justify-content-around">
                    <img src={logo} alt="logo" classNameName="ms-3 ms-lg-5 p-2 d-none d-lg-block navbar-logo"/>
                    <img src={logo_md} alt="logo_md" classNameName="ms-3 ms-lg-5 d-block d-lg-none navbar-logo"/>
                    <div classNameName="col ms-3 ms-lg-5 mt-3">
                        <span classNameName="fw-light pt-5">Bengaluru</span>
                    </div>
                </div>
                <div classNameName="col-lg-4 col-xl-4">
                <ul classNameName="row text-center list-unstyled">
                    <li classNameName="col pt-3 text-primary nav-li" role="button">Buy</li>
                    <li classNameName="col pt-3 text-primary nav-li" role="button">Rent</li>
                    <li classNameName="col pt-3 text-primary nav-li" role="button">Sell</li>
                    <button classNameName="col mt-2 ms-xl-5 ms-3 bg-primary border-0 rounded text-light fw-light">Post Property</button>
                </ul>
                </div>
            </div>
        </div> */}