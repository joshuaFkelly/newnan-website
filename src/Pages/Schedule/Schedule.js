/* This example requires Tailwind CSS v2.0+ */
import Contact from "../../Components/Contact/Contact"
import Schedule from "../../Images/independent-mma-fitness-newnan-ga-schedule.jpeg"
export default function Example() {
    return <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <img src={Schedule}></img>
        <Contact />
    </div>
}
