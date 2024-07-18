import { About } from "../Components/ProjectDetail/LeftPart/About";
import { MoreProperties } from "../Components/ProjectDetail/LeftPart/MoreProperties";
import { PropertyCard } from "../Components/ProjectDetail/LeftPart/PropertyCard";
import { Contact } from "../Components/ProjectDetail/RightPart/Contact";
import { Profile } from "../Components/ProjectDetail/RightPart/Profile";

export const PropertyDetail = ()=>{

    return(
        <div className="d-flex flex-column flex-xl-row justify-content-between mt-5">
            
            {/* Left */}
            <div>
            <PropertyCard/>
            <About/>
            {/* <>
            <MoreProperties/></> */}
            </div>

            {/* Right */}
            <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-around justify-content-xl-start mt-3">
              <Profile/>
              <Contact/>
            </div>
        </div>
    );
};