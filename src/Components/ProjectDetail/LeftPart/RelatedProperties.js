import { useEffect, useState } from "react";
import { data } from "../../../data";


export const RelatedProperties = ()=>{
    const [properties,setProperties] = useState([])

    useEffect(()=>{
        const filteredData = data.filter((dt)=>dt.location === "Mysuru");
        const myProperties = filteredData[0].apartments;
        setProperties(myProperties);
    },[]);

    return(
        <div className='bg-white rounded shadow'>
           
        {/* Carousel */}
        <div className="row mt-5 px-2">
        <p className='mt-3 ms-2'>Related Properties</p>      
           <div>
           {properties?.map((property)=>(
            <div class="card mb-3 border-0 rounded shadow p-2">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={property.img} class="card-img-top card-img" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{property.demo}</h5>
                  <p className="card-text text-secondary fw-normal opacity-50">
                            
                            {/* Location Icons starts here */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
                            {/* Location Icons ends here */}

                            {property.address}.</p>
                  <p class="card-text">{property.details}.</p>
                  <div className="d-flex justify-content-between">
                  <div className="d-flex">
                  <h5 className="card-title text-primary fw-bolder">₹{property.price}</h5>
                  <p className="card-text text-secondary fw-normal opacity-50 ms-1">Posted On {property.listedOn}</p>
                  </div>
                  <button href="#" className="btn btn-primary">Contact</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
           ))}
           </div>
        </div>
    </div>
    );
};