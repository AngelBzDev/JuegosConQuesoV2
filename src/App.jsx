import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PopularGames from "./components/PopularGames";
import Swipe from "./components/Swipe";
import getGames from "./helpers/getGames";
import "./styles/normalize.css";
import "./styles/styles.css";

const App = () => {
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
        <section className="container mb-2">
          <h3>Game</h3>
        </section>
      </main>
    </>
  );
};

export default App;
