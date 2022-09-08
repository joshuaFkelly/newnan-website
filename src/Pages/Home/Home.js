import Programs from "../../Components/Features/Programs";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Coachs from "../../Components/Coachs/Coachs"
import Testimonials from "../../Components/Testimonials/Testimonials"
import Contact from "../../Components/Contact/Contact";
import FAQ from "../../Components/FAQ/FAQ";
const Home = () => {
    return (
        <div>
            <HeroSection />
            <Programs />
            <Testimonials />
            <Coachs />
            <Contact />
        </div>

    );
}

export default Home;