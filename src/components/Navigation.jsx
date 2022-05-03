import { NavLink } from "react-router-dom";

const Navigation = () => {
   return (
      <div className="navigation">
         <ul>
            <NavLink to="/" className="home">
               Accueil
            </NavLink>
            <NavLink to="/about" className="about">
               À Propos
            </NavLink>
         </ul>
      </div>
   );
};

export default Navigation;
