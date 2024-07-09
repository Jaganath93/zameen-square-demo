

export const Cards = ({data})=>{

    return(
        <div className="col">
                <div className="card rounded border border-white bg-white" style={{width: '20rem'}}>
                  <img src={data.img} className="card-img-top card-img"  alt={data.id}/>
                    <div className="card-body">
                      <h5 className="card-title text-primary fw-bolder">₹{data.price}</h5>
                      <h6 className="card-title">{data.bhk}BHK Flat in {data.area}</h6>
                        <p className="card-text text-secondary fw-normal opacity-50">
                            
                            {/* Location Icons starts here */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
                            {/* Location Icons ends here */}

                            {data.address}.</p>
                            <div>
                                <p></p>
                            </div>
                         <div className="d-flex justify-content-between">
                            <div>
                                <h6 className="text-muted">Listed On</h6>
                                <p>{data.listedOn}</p>
                            </div>
                         <button href="#" className="btn btn-primary">View Details</button>
                         </div>
                    </div>
               </div>
                </div>
    );
}