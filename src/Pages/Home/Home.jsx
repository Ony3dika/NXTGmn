import React from "react";
import Navp from "../../Components/Nav.jsx";
import Arrivals from "./Arrivals.jsx";
import Explore from "./Explore.jsx";
import Intro from "./Intro.jsx";

function Home() {
  return (
    <main className='min-h-screen box-border w-full bg-primary'>
      <Navp />
      <Intro />
      <Arrivals />
      <Explore />
    </main>
  );
}

export default Home;
