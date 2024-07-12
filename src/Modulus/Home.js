import { useState } from "react";
import { Agents } from "../Components/Agents";
import { Apartments } from "../Components/Apartments";
import { Commercials } from "../Components/Commercials";
import { Demo } from "../Components/Demo";
import { NavBar } from "../Components/NavBar";
import { Office } from "../Components/Office";
import { Plots } from "../Components/Plots";
import { Projects } from "../Components/Projects";
import { Slider } from "../Components/Slider";
import { Subscribe } from "../Components/Subscribe";
import { Footer } from "../Components/Footer";


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


            {/* Footer Section */}
            <>
            <Footer/>
            </>
        </div>
    );
};