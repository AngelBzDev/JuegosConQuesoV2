import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GameScreen from "./components/GameScreen";

import "./styles/normalize.css";
import "./styles/styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="games/:id" element={<GameScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
