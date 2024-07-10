import { useEffect, useState } from "react";
import { data } from "../data";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ProjectCards } from "./ProjectCards";


export const Projects = ()=>{
    const [location,setLocation] = useState("");
    const [description,setDescription] = useState("");
    const [apartment, setApartMents] = useState([]);

    useEffect(()=>{         
        const filteredData = data.filter((dt)=>dt.location == "Mysuru");
        const storedLocation = filteredData[0].location;
        setLocation(storedLocation);

        const storedDescription = filteredData[0].projects.description;
        setDescription(storedDescription);

        const myPlots = filteredData[0].projects.data;
        setApartMents(myPlots);
    },[]);

    //Carousel Part

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 2.5 },
    };

    const carouselData = apartment.map((apt,i)=> <ProjectCards apt={apt} key={i}/>)
    
    const items = [...(carouselData)];

    return(
        <div className="container-fluid">
            <div>
                <h1 className="text-center">Projects in {location}</h1>
                <p className="text-muted text-center px-5">{description}</p>
            </div>

            <div class="row row-cols-1 row-cols-md-2 g-4">
                
            <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls={true}
    />
               
            </div>
        </div>
    );
};