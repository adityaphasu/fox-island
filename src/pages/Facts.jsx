import CTA from "../components/CTA";
import AnimatedPage from "../components/AnimatedPage";
import { facts } from "../constants";
import { fadeIn, fadeInX, pageAnimation } from "../utils/animatedVariants";
import AnimatedComponent from "../components/AnimatedComponent";
import { AnimatePresence } from "framer-motion";

const Facts = () => {
  return (
    <AnimatedPage layout variants={pageAnimation} className="max-container">
      <div className="mt-5 flex flex-col gap-5 lg:text-center">
        <h1 className="head-text lg:text-7xl">
          Let's learn about the World of{" "}
          <span className="orange-gradient_text font-semibold drop-shadow">Foxes!</span>
        </h1>
        <p className="text-brown-550 lg:px-12">
          Discover fascinating facts and insights into the lives of foxes. From their clever
          behaviors to unique characteristics, join us on a journey through the enchanting world of
          these incredible creatures.
        </p>
      </div>
      <AnimatePresence>
        {facts.map((fact, index) => (
          <div
            key={fact.id}
            className={`my-16 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-20 
          ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
            <AnimatedComponent
              variants={fadeInX(index % 2 === 0 ? -20 : 20)}
              className="w-full md:w-3/12 lg:w-2/5">
              <img src={fact.imageUrl} alt={`Fox Illustration ${index + 1}`} />
            </AnimatedComponent>
            <AnimatedComponent variants={fadeIn} className="flex-1">
              <h2 className="subhead-text">{fact.title}</h2>
              <p className="mt-2 text-sm text-brown-550">{fact.description}</p>
            </AnimatedComponent>
          </div>
        ))}
      </AnimatePresence>
      <hr className="border-orange-300" />
      <CTA />
    </AnimatedPage>
  );
};

export default Facts;
