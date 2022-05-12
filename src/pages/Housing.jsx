import { useParams } from "react-router-dom";
import housings from "../datas/housings";
import Gallery from "../components/Gallery";
import Infos from "../components/Infos";
import Collapse from "../components/Collapse";

const Housing = () => {
   // We retrieve the housing ID parameter that was added to page URL.
   // Then, we match the housing ID to the ID parameter added in the url.
   let { id } = useParams();
   const currentHousing = housings.find((element) => element.id === id);

   return (
      <main className="main-housing">
         <Gallery pictures={currentHousing.pictures} />
         <Infos
            title={currentHousing.title}
            location={currentHousing.location}
            name={currentHousing.host.name}
            picture={currentHousing.host.picture}
            rating={currentHousing.rating}
            tag={currentHousing.tags}
         />

         <section className="collapses collapses-housing">
            <Collapse
               title={"Description"}
               items={[currentHousing.description]}
            />

            <Collapse
               title={"Équipements"}
               items={currentHousing.equipments.map((element, index) => (
                  <li key={`equipment-${index}`}>{element}</li>
               ))}
            />
         </section>
      </main>
   );
};

export default Housing;

/////////////////////////////////////////////////////

// import { useParams } from "react-router-dom";
// import housings from "../datas/housings";
// import Gallery from "../components/Gallery";
// import Infos from "../components/Infos";
// import Collapse from "../components/Collapse";

// const Housing = () => {
//    let { id } = useParams();
//    const currentHousing = housings.find((element) => element.id === id);

//    const descriptionTitle = "Description";
//    const equipmentTitle = "Équipements";

//    return (
//       <main className="main-housing">
//          <Gallery pictures={currentHousing.pictures} />
//          <Infos
//             title={currentHousing.title}
//             location={currentHousing.location}
//             name={currentHousing.host.name}
//             picture={currentHousing.host.picture}
//             rating={currentHousing.rating}
//             tag={currentHousing.tags}
//          />

//          <section className="collapses collapses-housing">
//             <Collapse
//                title={descriptionTitle}
//                items={[currentHousing.description]}
//             />

//             <Collapse
//                title={equipmentTitle}
//                items={currentHousing.equipments.map((element, index) => (
//                   <li key={`equipment-${index}`}>{element}</li>
//                ))}
//             />
//          </section>
//       </main>
//    );
// };

// export default Housing;
