
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Cards } from '../../Cards';
import { data } from '../../../data';
import { useEffect, useState } from 'react';

export const MoreProperties = ()=>{
    const [apartment, setApartMents] = useState([]);

    useEffect(()=>{
        const filteredData = data.filter((dt)=>dt.location === "Mysuru");
        const mysApartments = filteredData[0].apartments;
        setApartMents(mysApartments);
    },[]);

    const responsive = {
        0: { items: 1 },
        568: { items: 1.5 },
        713: {items:2},
        1024: { items: 2.5 },
        1200: {items:3.5}
    };

    const carouselData = apartment.map((apt,i)=> <Cards data={apt} key={i} bhk={true}/>)
    
    const items = [...(carouselData)];

    return(
        <div>
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
};