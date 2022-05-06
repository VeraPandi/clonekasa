import { NavLink } from "react-router-dom";

const Navigation = () => {
   return (
      <div className="navigation">
         <NavLink to="/" className="home">
            Accueil
         </NavLink>
         <NavLink to="/about" className="about">
            À Propos
         </NavLink>
      </div>
   );
};

export default Navigation;
