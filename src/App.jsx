import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NewGames from "./components/NewGames";
import PopularGames from "./components/PopularGames";
import Swipe from "./components/Swipe";

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
          <NewGames />
        </section>
      </main>
    </>
  );
};

export default App;
