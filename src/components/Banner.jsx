import banner from "../assets/banner.png";

const Banner = () => {
   return (
      <div className="banner">
         <img src={banner} alt="Paysage" />
         <h1>
            Chez vous, <br></br>partout et ailleurs
         </h1>
      </div>
   );
};

export default Banner;
