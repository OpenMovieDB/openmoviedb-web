import Genres from "@/components/screens/Home/Genres";
import Hero from "@/components/screens/Home/Hero";
import Novelties from "@/components/screens/Home/Novelties";
import Recomendations from "@/components/screens/Home/Recomendations";

const Home = () => {
  return (
    <>
      <Hero />
      <Recomendations />
      <Genres />
      <Novelties />
    </>
  );
};

export default Home;
