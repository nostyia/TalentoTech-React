import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShowMovies from "./components/ShowMovies";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import SearchMovie from "./components/SearchMovie";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <SearchMovie />
      <HashRouter>
        <Routes>
          <Route path="/" element={<ShowMovies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
};

export default App;
