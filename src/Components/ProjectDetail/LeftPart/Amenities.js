import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Amenities = ()=>{

    const amenities = ["Elevators/Lifts", "Swimming Pool", "Guest Parking Spaces ", "Gym", "CCTV Surveillance", "Play Ground", "Pet Room", "Yoga Meditation Area"]

    return(
        <div className="container-fluid bg-white mt-3 rounded shadow">
            <h6 className="pt-3">Amenities</h6>
            <div className="row mt-4">
                
                {amenities?.map((amenity,i)=>(
                    <div className="col-6 col-md-4" key={i}>
                    <div className="d-flex">
                    <FontAwesomeIcon icon={faCircle} size="2xs" style={{color: "#63E6BE",}} className="py-1"/>
                    <p className="ms-1">{amenity}</p>
                    </div>
                    </div>
                ))}
                
            </div>
        </div>
    );
};