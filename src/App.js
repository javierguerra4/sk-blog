import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import BookCard from "./components/BookCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <BookCard />
    </div>
  );
}

export default App;
