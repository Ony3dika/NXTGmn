import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer.jsx";
import Navbar from "../../Components/Nav.jsx";
import Arrivals from "./Arrivals.jsx";
import Explore from "./Explore.jsx";
import Intro from "./Intro.jsx";
import Loading from "./Loading.jsx";

function Home() {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 4000)
  
  },[])
  
  return (
    <main className='min-h-screen box-border w-full bg-primary'>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <Intro />
          <Arrivals />
          <Explore />
          <Footer />
        </div>
      )}
    </main>
  );
}

export default Home;
