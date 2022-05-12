import { NavLink } from "react-router-dom";

const Navigation = () => {
   return (
      <div className="navigation">
         <NavLink to="/" className="home-link">
            Accueil
         </NavLink>
         <NavLink to="/about" className="about-link">
            À Propos
         </NavLink>
      </div>
   );
};

export default Navigation;
