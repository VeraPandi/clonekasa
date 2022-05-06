import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import information from "../datas/information";
console.log(information);

const Collapse = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = (index) => {
      if (isOpen === index) {
         return setIsOpen(null);
      }
      setIsOpen(index);
   };

   return (
      <main className="collapses">
         {information.map((element, index) => (
            <section className="collapse" key={`${element}-${index}`}>
               <div className="collapse-header">
                  <h2 className="collapse-title">{element.title}</h2>
                  <div>
                     <span
                        className={
                           isOpen === index
                              ? "fa-chevron-down active"
                              : "fa-chevron-down"
                        }
                        onClick={() => toggle(index)}
                        key={index}
                     >
                        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                     </span>
                  </div>
               </div>
               <p
                  className={
                     isOpen === index
                        ? "collapse-description active"
                        : "collapse-description"
                  }
               >
                  {element.description}
               </p>
            </section>
         ))}
      </main>
   );
};

export default Collapse;
