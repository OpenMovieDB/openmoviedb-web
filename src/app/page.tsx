import Genres from "@/components/screens/Home/Genres";
import Hero from "@/components/screens/Home/Hero";
import Novelties from "@/components/screens/Home/Novelties";
import Popular from "@/components/screens/Home/Popular";
import Recomendations from "@/components/screens/Home/Recomendations";
import TopOfMonth from "@/components/screens/Home/TopOfMonth";

const Home = () => {
    return (
        <div>
            <Hero />
            <div className="container">
                <Genres />
                <TopOfMonth />
                {/* <Recomendations /> */}
                <Novelties />
                <Popular />
            </div>
        </div>
    );
};

export default Home;
