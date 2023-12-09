import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { abilities, adventures } from "../constants";
import CTA from "../components/CTA";
import AnimatedPage from "../components/AnimatedPage";
import { pageAnimation } from "../utils/animatedVariants";
import Tooltip from "../components/Tooltip";

const About = () => {
  return (
    <AnimatedPage variants={pageAnimation} className="max-container">
      <div className="mt-4 flex flex-col gap-3 lg:text-center">
        <h1 className="head-text">
          Welcome to <span className="orange-gradient_text drop-shadow">Fox Island!</span>
        </h1>
        <div className="mt-3 flex flex-col gap-3 text-brown-550 lg:px-12">
          <p>
            Explore the fascinating world of foxes on Fox Island! Witness the playful antics of fox
            kits as they navigate the lush landscapes and embark on thrilling adventures.
          </p>
        </div>
      </div>
      <div className="flex flex-col py-16">
        <h2 className="subhead-text">Fox Talents</h2>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-12">
          {abilities.map((ability) => (
            <Tooltip text={ability.name} key={ability.name}>
              <div className="btn-back roundend-xl"></div>
              <div className="btn-front flex items-center justify-center rounded-xl">
                <img src={ability.imageUrl} alt={ability.name} className=" object-contain" />
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h2 className="subhead-text">Life on Fox Island!</h2>
        <div className="mt-5 flex flex-col gap-3 text-brown-550">
          <p>
            Discover the daily adventures and unique characteristics of foxes on Fox Island! Watch
            as they stealthily hunt for food, communicate with adorable squeaks and barks, and build
            intricate dens for their families.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {adventures.map((adventure) => (
              <VerticalTimelineElement
                key={adventure.name}
                icon={
                  <div className="flex h-full w-full items-center justify-center">
                    <img src={adventure.iconUrl} alt={adventure.name} className=" object-contain" />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: adventure.iconBg,
                  boxShadow: "none",
                }}
                iconStyle={{
                  background: adventure.iconBg,
                }}>
                <div>
                  <h3 className="font-amatic text-xl font-bold text-brown-600 lg:text-3xl">
                    {adventure.name}
                  </h3>
                  <p className="font-base font-medium text-brown-550">{adventure.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-orange-300" />
      <CTA />
    </AnimatedPage>
  );
};

export default About;
