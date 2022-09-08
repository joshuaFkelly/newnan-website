import HeroCard from "./HeroCard";
import CloudLogos from "./LogoClouds";

export default function HeroSection() {
    return (
        <div className="bg-white">
            <main>
                <div>
                    {/* Hero card */}
                    <HeroCard />

                    {/* Cloud Logos */}
                    <CloudLogos />
                </div>
            </main>
        </div>
    )
}
