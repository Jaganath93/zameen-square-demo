
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
        568: { items: 1 },
        713: {items:1.5},
        1024: { items: 2 },
        1200: {items:3}
    };

    const carouselData = apartment.map((apt,i)=> <Cards data={apt} key={i} bhk={true}/>)
    
    const items = [...(carouselData)];

    return(
        <div className='bg-white rounded shadow'>
           
            {/* Carousel */}
            <div className="row mt-5">
            <p className='mt-3 ms-2'>See More Properties By <span className='text-primary'>Bhasker G</span></p>      
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