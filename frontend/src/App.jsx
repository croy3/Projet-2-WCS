import MainHeader from "./components/header";
import Presentation from "./components/Presentation";
import GamesList from "./components/GamesList";
import "./styles/App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <GamesList />
      <Presentation id={1000} />
      <Footer />
    </div>
  );
}

export default App;
