import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../../constants";
import gsap from "gsap";

const Cocktails = () => {
   useGSAP(() => {
      const parallaxTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: "#cocktails",
            start: "top 30%",
            end: "bottom 80%",
            scrub: true,
         },
      });
      parallaxTimeline
         .from("#c-left-leaf", {
            x: -100,
            y: 100,
            ease: "power1.out",
         })
         .from("#c-right-leaf", {
            x: 100,
            y: 90,
            ease: "power1.out",
         });
   });
   return (
      <section id="cocktails" className="noisy">
         <img
            src="/images/cocktail-left-leaf.png"
            alt="left leaf"
            id="c-left-leaf"
         />
         <img
            src="/images/cocktail-right-leaf.png"
            alt="right leaf"
            id="c-right-leaf"
         />

         <div className="list">
            <div className="popular">
               <h2>Most Popular cocktails:</h2>
               <ul>
                  {cocktailLists.map(({ name, country, detail, price }) => (
                     <li key={name}>
                        <div className="md:me-28">
                           <h3>{name}</h3>
                           <p className="country">
                              {country} | {detail}
                           </p>
                        </div>
                        <span> - {price}</span>
                        <span></span>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="loved">
               <h2>Most Loved mocktails:</h2>
               <ul>
                  {mockTailLists.map(({ name, country, detail, price }) => (
                     <li key={name}>
                        <div className="me-28">
                           <h3>{name}</h3>
                           <p className="country">
                              {country} | {detail}
                           </p>
                        </div>
                        <span> - {price}</span>
                        <span></span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
};

export default Cocktails;
