import logo from "../assets/logos/logo.png";
import Navigation from "../components/Navigation";

const Header = () => {
   return (
      <header className="header">
         <img src={logo} className="logo" alt="logo de Kasa" />
         <Navigation />
      </header>
   );
};

export default Header;
