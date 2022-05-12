import starRed from "../assets/icons/starRed.png";
import starGrey from "../assets/icons/starGrey.png";

const Rating = ({ rating }) => {
   // Comparison array representing the number of stars to display
   const stars = [1, 2, 3, 4, 5];

   return (
      <div className="rating">
         {stars.map((element) => (
            <img
               key={`stars-${element}`}
               src={element <= rating ? starRed : starGrey}
               alt=""
            />
         ))}
      </div>
   );
};

export default Rating;
