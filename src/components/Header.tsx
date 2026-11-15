import Logo from "../assets/logo.png";

const Header = () => {

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <a href="./index.html">
            <img src={Logo} alt="" className="logo" />
          </a>
          <input type="checkbox" name="menu-toggle" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="fa-solid fa-bars"></label>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/cart" id="cart-link">
                <i className="fa-solid fa-cart-shopping"></i>Cart
              </a>
            </li>
          </ul>
        </nav>
        <div className="cart-modal">
          <a href="#" className="modalclose">
            <i className="fa fa-window-close" aria-hidden="true"></i>
          </a>
          <h2>Cart list</h2>
          <p>Empty cart list, please add movie's</p>
          <ul className="cart-modal-ul"></ul>

          <div className="cart-reset-buy">
            <a href="#reset" className="cart-reset">
              Reset
            </a>
            <span className="total-price">$0</span>
            <a href="#buy" className="cart-buy">
              Buy
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;