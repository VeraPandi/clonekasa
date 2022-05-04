import errorCode from "../assets/errorCode.png";
import { NavLink } from "react-router-dom";

const Error = () => {
   return (
      <main className="errorPage">
         <img src={errorCode} className="errorCode" alt="" />
         <h2 className="errorMessage">
            Oups ! La page que vous demandez n'existe pas.
         </h2>
         <NavLink to="/" className="backLink">
            Retourner sur la page d’accueil
         </NavLink>
      </main>
   );
};

export default Error;
