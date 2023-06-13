import Logo from "../Images/food_fire_logo";
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
           <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
};

export default Header;