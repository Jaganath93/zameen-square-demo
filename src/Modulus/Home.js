import { Apartments } from "../Components/Apartments";
import { Commercials } from "../Components/Commercials";
import { Demo } from "../Components/Demo";
import { NavBar } from "../Components/NavBar";
import { Office } from "../Components/Office";
import { Plots } from "../Components/Plots";
import { Projects } from "../Components/Projects";
import { Slider } from "../Components/Slider";


export const Home = ()=>{

    return(
        <div>
            <div className="mt-5">
            <NavBar/>
            <Slider/>
            </div>

            {/* Apartments Section*/}
            <>
              <Apartments/>
            </>


            {/* Projects Section */}
            <>
            <Projects/>
            </>
            

            {/* Plots Section */}
            <>
              <Plots/>
            </>


            {/* Office Section */}
            <>
            <Office/>
            </>

            
            {/* Commercials Section */}
            <>
            <Commercials/>
            </>
        </div>
    );
};