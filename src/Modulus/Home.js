import { useState } from "react";
import { Agents } from "../Components/Agents/Agents";
import { Apartments } from "../Components/Apartments/Apartments";
import { Commercials } from "../Components/Commercials/Commercials";
import { NavBar } from "../Components/Header/NavBar";
import { Office } from "../Components/Office/Office";
import { Plots } from "../Components/Plots/Plots";
import { Projects } from "../Components/Projects/Projects";
import { Slider } from "../Components/Header/Slider";
import { Subscribe } from "../Components/Subscribe";


export const Home = ()=>{
  
  const [location,setLocation] = useState("Mysuru");

    return(
        <div>
            <div className="mt-5">
            <NavBar location={location} setLocation={setLocation}/>
            <Slider/>
            </div>

            {/* Apartments Section*/}
            <>
              <Apartments location={location}/>
            </>


            {/* Projects Section */}
            <>
            <Projects location={location}/>
            </>
            

            {/* Plots Section */}
            <>
              <Plots location={location}/>
            </>


            {/* Office Section */}
            <>
            <Office location={location}/>
            </>

            
            {/* Commercials Section */}
            <>
            <Commercials location={location}/>
            </>


            {/* Agents Section */}
            <>
            <Agents location={location}/>
            </>


            {/* Subscribe Section */}
            <>
             <Subscribe/>
            </>
        </div>
    );
};