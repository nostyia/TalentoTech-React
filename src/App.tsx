import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";
import SearchMovie from "./components/SearchMovie";

function App() {
  return (
    <>
      <Header />
      <SearchMovie />
      <main className="main"></main>
      <Footer />
    </>
  );
}

export default App;
