import { useEffect, useState } from "react";
import SponsorsPage from "../../Components/Sponsors/SponsorsPage.jsx";
import sponsors from "./sponsors.json";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Hero from "../../Components/PageHero/Hero.jsx";
import Loader from "../../Components/Loader/loader.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

const SponsorPage = () => {
    const sponsor = sponsors.Abhivyakti_Sponsors_2025;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        document.title = "Abhivyakti | Sponsors";
    }, []);
    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <Navbar />
            <div className="flex justify-center flex-col scroll-smooth">
                <Hero page="sponsors" />
                {Object.keys(sponsor).map((sponsorKey) => (
                    <SponsorsPage key={sponsorKey} title={sponsorKey.replace('-', ' ')} sponsors={sponsor[sponsorKey]} />
                ))}
            </div>
            <Footer />
        </>
    );
};

export default SponsorPage;