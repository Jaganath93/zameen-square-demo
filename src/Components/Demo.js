import { useEffect, useState } from "react";
import { data } from "../data";
// import { Cards } from "./Cards";
import { CardsDemo } from "./CardsDemo";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Demo = ()=>{
    const [location,setLocation] = useState("")
    const [apartment, setApartMents] = useState([]);
    const [twoBhk, setTwoBhk] = useState(false);
    const [threeBhk, setThreeBhk] = useState(false);

    useEffect(()=>{
        const filteredData = data.filter((dt)=>dt.location == "Mysuru");
        const storedLocation = filteredData[0].location;
        setLocation(storedLocation);
        const mysApartments = filteredData[0].apartments;
        setApartMents(mysApartments);
    },[]);

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const data1 = apartment.map((apt,i)=> <CardsDemo data={apt} key={i} bhk={true}/>)
    // const data2 = []
    
    // const items = [...data2.concat(data1)];

    
    const items = [...(data1)];

    const handleFilterTwo = ()=> {
        setThreeBhk(false);
        setTwoBhk(true);
        const filteredData = data.filter((dt)=>dt.location == "Mysuru");
        const apartmentArray = filteredData[0].apartments;
        const apartmentTwoBhk = apartmentArray?.filter((apt)=> apt.bhk == "2");
        if(apartmentTwoBhk.length>0) setApartMents(apartmentTwoBhk) 
    }

    const handleFilterThree = ()=> {
        setTwoBhk(false);
        setThreeBhk(true);
        const filteredData = data.filter((dt)=>dt.location == "Mysuru");
        const apartmentArray = filteredData[0].apartments;
        const apartmentThreeBhk = apartmentArray?.filter((apt)=> apt.bhk == "3");
        if(apartmentThreeBhk.length>0) setApartMents(apartmentThreeBhk) 
    };
     

    return(
        <div className="container-fluid">
            <div className="row mt-5 pt-5">
                <div className="col-12 col-sm-8 col-md-6 col-lg-5">
                <h3 className="fw-normal">Popular Apartment in {location}</h3>
                </div>
                <div className="d-none d-sm-block col-4 col-md-6">
                    <button className={`border-0 ${twoBhk ? 'bhk-col' : ""}`} onClick={handleFilterTwo}>2 BHK</button>
                    <button className={`ms-3 border-0 ${threeBhk ? 'bhk-col' : ""}`} onClick={handleFilterThree}>3 BHK</button>
                </div>
            </div>
            {/* <img src={heart} className="text-danger bg-white" alt=""/> */}

            {/* Cards */}
            <div className="row mt-5">      
                <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
    />
            </div>
        </div>
    );
}