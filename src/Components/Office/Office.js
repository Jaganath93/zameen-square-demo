import { useEffect, useState } from "react";
import { data } from "../../data";
import { Cards } from "../Cards";
// import  heart from "../images/heart-fill.svg";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Office = ({location})=>{
    // const [location,setLocation] = useState("");
    const [apartment, setApartMents] = useState([]);
    const [all, setAll] = useState(true);
    const [sqft1, setSqft1] = useState(false);
    const [sqft2, setSqft2] = useState(false);

    useEffect(()=>{
        const filteredData = data.filter((dt)=>dt.location === location);
        const myPlots = filteredData[0].office;
        setApartMents(myPlots);
    },[location]);

    const handleFilterTwo = ()=> {
        setSqft2(false);
        setAll(false);
        setSqft1(true);
        const filteredData = data.filter((dt)=>dt.location === location);
        const apartmentArray = filteredData[0].office;
        const apartmentTwoBhk = apartmentArray?.filter((apt)=> apt.sqft > 1199);
        if(apartmentTwoBhk.length>0) setApartMents(apartmentTwoBhk); 
    }

    const handleFilterThree = ()=> {
        setSqft1(false);
        setAll(false);
        setSqft2(true);
        const filteredData = data.filter((dt)=>dt.location === location);
        const apartmentArray = filteredData[0].office;
        const apartmentThreeBhk = apartmentArray?.filter((apt)=> apt.sqft> 2399);
        if(apartmentThreeBhk.length>0) setApartMents(apartmentThreeBhk); 
    };

    const handleFilterAll = ()=>{
        setSqft1(false);
        setSqft2(false);
        setAll(true);
        const filteredData = data.filter((dt)=>dt.location === location);
        const apartmentArray = filteredData[0].office;
        setApartMents(apartmentArray)
    }

    //Carousel Part

    const responsive = {
        0: { items: 1 },
        568: { items: 1.5 },
        713: {items:2},
        1024: { items: 2.5 },
        1200: {items:3.5}
    };

    const carouselData = apartment.map((apt,i)=> <Cards data={apt} key={i} bhk={false}/>)
    
    const items = [...(carouselData)];

    return(
        <div className="container-fluid">
            <div className="row mt-5 pt-5">
                <div className="col-12 col-sm-8 col-md-6 col-lg-5">
                <h3 className="fw-normal">Office Spaces in {location}</h3>
                </div>
                <div className="d-none d-sm-block col-4 col-md-6">
                    <button className={`border-0 rounded-2 ${all ? 'bhk-col' : ""}`} onClick={handleFilterAll}>All</button>
                    <button className={`ms-1 ms-md-3 border-0 rounded-2 ${sqft1 ? 'bhk-col' : ""}`} onClick={handleFilterTwo}>1200 Sqft</button>
                    <button className={`ms-1 ms-md-3 border-0 rounded-2 ${sqft2 ? 'bhk-col' : ""}`} onClick={handleFilterThree}>2400 Sqft</button>
                </div>
            </div>
            {/* <img src={heart} className="text-danger bg-white" alt=""/> */}

            {/* Cards */}
            {/* <div className="row mt-5">
                {apartment.map((apt,i)=> <Cards data={apt} key={i} bhk={false}/>)}
            </div> */}

            {/* Carousel */}
            <div className="row mt-5">      
                <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls={true}
    />
            </div>

        </div>
    );
}