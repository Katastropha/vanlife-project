import { ReactElement } from "react";

const Home = (): ReactElement => {
  console.log("home");
  return (
    <div className="home-component">
      <h1 className="home_header">
        You got the travel plans, we got the travel vans.
      </h1>

      <p className="home_text">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>

      <button
        className="home_btn"
        onClick={() => {
          console.log("Find your van > HOME ");
        }}
      >
        Find your van
      </button>
    </div>
  );
};

export default Home;
