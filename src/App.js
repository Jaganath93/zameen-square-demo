import "./App.css";
import { Home } from "./Modulus/Home";
import "./Styles/font.css";
import "./Styles/color.css";
import { Routes,Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { PropertyDetail } from "./Components/PropertyDetail";

function App() {
  return (
    <div className="container-fluid">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties/:id" element={<PropertyDetail />} />
    </Routes>

     {/* Footer Section */}
     <>
            <Footer/>
            </>
    </div>
  );
}

export default App;
