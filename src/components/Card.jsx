import { Link } from "react-router-dom";
import housings from "../datas/housings";

const Card = () => {
   return (
      <div className="cards">
         {housings.map((housing, index) => (
            <div className="card" key={housing.id}>
               <Link to={`/housing/${housing.id}`} className="housing">
                  <img src={housing.cover} alt={housing.title} />
                  <p className="card-title">{housing.title}</p>
               </Link>
            </div>
         ))}
      </div>
   );
};

export default Card;
