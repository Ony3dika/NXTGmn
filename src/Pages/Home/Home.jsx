import React from "react";
import Footer from "../../Components/Footer.jsx";
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
      <Footer />
    </main>
  );
}

export default Home;
