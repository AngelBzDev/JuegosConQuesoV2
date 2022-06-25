import Navbar from "./Navbar";
import Header from "./Header";
import Swipe from "./Swipe";
import PopularGames from "./PopularGames";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Header />
        <Swipe />
      </header>
      <main>
        <section className="container mb-2">
          <PopularGames />
        </section>
      </main>
    </>
  );
};

export default Home;
