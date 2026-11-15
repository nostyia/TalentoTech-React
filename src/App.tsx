import Footer from "./components/Footer";
import Header from "./components/Header";
import ShowMovies from "./components/ShowMovies";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import SearchMovie from "./components/SearchMovie";
import "./App.css";

const App = () => {
  let mainContent;
  switch (window.location.pathname) {
    case "/":
      mainContent = <ShowMovies />;
      break;
    case "/contact":
      mainContent = <Contact />;
      break;
    case "/cart":
      mainContent = <Cart />;
      break;
    default:
      mainContent = <ShowMovies />;
      break;
  }

  return (
    <>
      <Header />
      <SearchMovie />
      {mainContent}
      <Footer />
    </>
  );
};

export default App;
