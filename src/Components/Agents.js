import { useEffect, useState } from "react";
import { data } from "../data";
import { AgentCard } from "./AgentCard";


export const Agents = ({location})=>{
    // const [location,setLocation] = useState("");
    const [description,setDescription] = useState("");
    const [apartment, setApartMents] = useState([]);
    // console.log(apartment)

   
    useEffect(()=>{         
        const filteredData = data.filter((dt)=>dt.location == location);
        

        const storedDescription = filteredData[0].agents.description;
        setDescription(storedDescription);

        const myPlots = filteredData[0].agents.data;
        setApartMents(myPlots);
    },[location]);



    return(
        <div className="container mt-5">
            <div>
                <h1 className="text-center">Agents in {location}</h1>
                <p className="text-center text-muted px-5">{description}</p>
            </div>

            <div className="row">
                {apartment.map((apt,i)=> <AgentCard data={apt} key={i} location={location}/>)}
            </div>
        </div>
    );
};