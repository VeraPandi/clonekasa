import Rating from "./Rating";
import Tag from "./Tag";
import Host from "./Host";

const Infos = ({ title, location, name, picture, rating, tag }) => {
   return (
      <section className="infos">
         <div className="titles">
            <h1>{title}</h1>
            <h2>{location}</h2>
         </div>

         <Tag tags={tag} />

         <div className="host-info">
            <Rating rating={rating} />
            <Host name={name} picture={picture} />
         </div>
      </section>
   );
};

export default Infos;
