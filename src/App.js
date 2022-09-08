import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Programs from "./Pages/Programs/Programs";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navigation/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Events from "./Pages/Events/Events";
import Schedule from "./Pages/Schedule/Schedule"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
