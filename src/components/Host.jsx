const Host = ({ name, picture }) => {
   return (
      <div className="host">
         <span>
            {name.split(" ")[0]} <br /> {name.split(" ")[1]}
         </span>
         <img src={picture} alt="" />
      </div>
   );
};

export default Host;
