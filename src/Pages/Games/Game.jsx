import React from "react";
import Navbar from "../../Components/Nav.jsx";
import axios from "axios";

function Game() {

  const fetcher = ()=>{
    axios.get("https://api.rawg.io/api/games").then((res) => {
      console.log(res);
    });
  }
  return (
    <React.Fragment>
      <main className='min-h-screen box-border w-full bg-primary'>
        <Navbar/>

        <div className="text-text pt-72">
          <button onClick={fetcher}>Click</button>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Game;
