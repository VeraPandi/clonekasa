import { NavLink } from "react-router-dom";
import errorCode from "../assets/images/errorCode.png";

const Error = () => {
   return (
      <main className="main-NotFoundPage">
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
