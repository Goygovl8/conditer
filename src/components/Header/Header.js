import "./Header";

import "./header.css";

function Header() {
  return (
    <header>
      <div className="text">
        <p>Chocobrat</p>
      </div>
      <div className="navigation">
        <a href="#">Home</a>
        <a href="#">Categories </a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="header_btns">
        <div className="search_input">
          <input placeholder="search"></input>
          <div className="search">
            <img src="./image/Search.png" />
          </div>
        </div>

        <div className="user_icon">
          <img src="./image/Vector.png" />
        </div>
        <div className="shop_card">
          <img src="./image/Cart.png" />
        </div>
      </div>
    </header>
  );
}

export default Header;
