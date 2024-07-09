import { Apartments } from "../Components/Apartments";
import { NavBar } from "../Components/NavBar";
import { Slider } from "../Components/Slider";


export const Home = ()=>{

    return(
        <div>
            <div>
            <NavBar/>
            <Slider/>
            </div>

            {/* Apartments Section*/}
            <>
              <Apartments/>
            </>
        </div>
    );
};