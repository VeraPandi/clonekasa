import bannerHome from "../assets/bannerHome.png";
import bannerAbout from "../assets/bannerAbout.png";
import { useLocation } from "react-router-dom";

const Banner = () => {
   const location = useLocation();

   return (
      <div className="banner">
         {location.pathname === "/" && (
            <>
               <img
                  className="home-banner"
                  src={bannerHome}
                  alt="Vue sur l'océan au pied des falaises"
               />
               <h1>
                  Chez vous, <br></br>partout et ailleurs
               </h1>
            </>
         )}

         {location.pathname === "/about" && (
            <div className="about-banner">
               <img src={bannerAbout} alt="Vue sur des montagnes enneigées" />
            </div>
         )}
      </div>
   );
};

export default Banner;
