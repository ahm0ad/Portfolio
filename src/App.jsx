import { BrowserRouter as Router, Routes } from "react-router-dom";
import NavbarMenu from "./components/Navbar/NavbarMenu";
import Footer from "./components/Footer/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
    
    <Router>
        <NavbarMenu />
        <Routes>
                {/* <Route exactly path="/" element={<Home />} /> */}
                {/* <Route path="About_us" element={<About_us/>} /> */}
      
        </Routes>
        <Footer />
  </Router>
);

export default App;