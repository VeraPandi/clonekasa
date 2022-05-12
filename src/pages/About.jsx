import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import information from "../datas/information";

const About = () => {
   return (
      <main className="main-about">
         <Banner />

         <section className="collapses collapses-about">
            {information.map((element, index) => (
               <Collapse
                  key={`col-${index}`}
                  title={element.title}
                  items={element.description}
               />
            ))}
         </section>
      </main>
   );
};

export default About;
