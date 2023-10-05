import { ReactElement } from "react";

const About = (): ReactElement => {
  console.log("about");
  return (
    <>
      <div className="about__img"></div>
      <div className="about-component">
        <div className="about__information">
          <h1 className="about__information-header">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>

          <p className="about__information-text">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>

          <p className="about__information-text">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>

          <div className="about__information-card">
            <h2 className="card-header">
              Your destination is waiting. Your van is ready.
            </h2>

            <button
              className="card-btn"
              onClick={() => {
                console.log("Explore our vans > ABOUT ");
              }}
            >
              Explore our vans
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
