import { About } from "../Components/ProjectDetail/LeftPart/About";
import { Amenities } from "../Components/ProjectDetail/LeftPart/Amenities";
import { MoreProperties } from "../Components/ProjectDetail/LeftPart/MoreProperties";
import { PropertyCard } from "../Components/ProjectDetail/LeftPart/PropertyCard";
import { Contact } from "../Components/ProjectDetail/RightPart/Contact";
import { Profile } from "../Components/ProjectDetail/RightPart/Profile";

export const PropertyDetail = ()=>{

    return(
        <div className="d-flex flex-column flex-xl-row mt-5">
            
            {/* Left */}
            <div className="w-75 w-lg-75">
            <PropertyCard/>
            <About/>
            <Amenities/>
            <div className="w-100">
            <MoreProperties/>
            </div>
            </div>

            {/* Right */}
            <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-around justify-content-xl-start mt-3">
              <Profile/>
              <Contact/>
            </div>
        </div>
    );
};