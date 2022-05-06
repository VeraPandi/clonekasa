import apartments from "../datas/apartments";
console.log(apartments);

const Card = () => {
   return (
      <div className="cards">
         {apartments.map((apartment, index) => (
            <div className="card" key={`${apartment}-${index}`}>
               <img src={apartment.cover} alt="" />
               <p className="card-title">{apartment.title}</p>
            </div>
         ))}
      </div>
   );
};

export default Card;
