import { About } from "../Components/ProjectDetail/LeftPart/About";
import { Amenities } from "../Components/ProjectDetail/LeftPart/Amenities";
import { ContactOwner } from "../Components/ProjectDetail/LeftPart/ContactOwner";
import { Location } from "../Components/ProjectDetail/LeftPart/Location";
import { MoreProperties } from "../Components/ProjectDetail/LeftPart/MoreProperties";
import { PropertyCard } from "../Components/ProjectDetail/LeftPart/PropertyCard";
import { RelatedProperties } from "../Components/ProjectDetail/LeftPart/RelatedProperties";
import { Contact } from "../Components/ProjectDetail/RightPart/Contact";
import { Profile } from "../Components/ProjectDetail/RightPart/Profile";

export const PropertyDetail = ()=>{

    return(
        <div className="d-flex flex-column flex-xl-row mt-5 w-100">
            
            {/* Left for bigger screens */}
            <div className="w-75 d-none d-xl-block">
            <PropertyCard/>
            <About/>
            <Amenities/>
            <ContactOwner/>
            <Location/>
            <div className="w-100">
            <MoreProperties/>
            </div>
            <div className="w-100">
            <RelatedProperties/>
            </div>
            </div>

            {/* Left for smaller screens*/}
            <div className="w-100 d-block d-xl-none">
            <PropertyCard/>
            <About/>
            <Amenities/>
            <ContactOwner/>
            <Location/>
            {/* <ContactOwner/> */}
            <div className="w-100">
            <MoreProperties/>
            </div>
            <div className="w-100">
            <RelatedProperties/>
            </div>
            </div>

            {/* Right */}
            <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-around justify-content-xl-start mt-3 ms-3">
              <Profile/>
              <Contact/>
            </div>
        </div>
    );
};