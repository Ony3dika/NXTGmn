import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Nav.jsx";
import axios from "axios";
import { BiSearchAlt2 } from "react-icons/bi";
import List from "./List.jsx";
import Btlist from "./Btlist.jsx";
import pic5 from "../../assets/img25.jpg";
import { FaStar } from "react-icons/fa";
import gif from "../../assets/ripple2.svg";
import Details from "./Details.jsx";

function Game() {
  const [games, setGames] = useState([]);
  const [game, setGame] = useState("");
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState("");
  const [validate, setValidate] = useState(false);
  const [run, setRun] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://rawg-video-games-database.p.rapidapi.com/games?key=f58d8c3022554fca911687f4e440b514",

      headers: {
        "X-RapidAPI-Key": "8755e71222msh09f429617efba1ap1fe33bjsn0d2e97b3c98b",
        // "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setGames(response.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setError(error.message);
        setValidate(true);
      });
  }, [run]);

  // Changing Visibility of Details
  const displayDetails = () => {
    setDisplay(!display);
  };
  return (
    <React.Fragment>
      <main className='min-h-screen box-border w-full bg-primary'>
        <Navbar />

        <div className='pt-24 lg:pt-32 md:pt-28 px-5 md:px-10 flex flex-col lg:flex-row text-text'>
          <List />
          {display ? <Details show={displayDetails} game={game} /> : ""}

          <section className=' basis-full lg:basis-3/4 lg:pl-8 relative isolate'>
            {loading ? (
              <div className='w-full h-1/10 flex justify-center absolute'>
                <div className='w-3/5 md:w-2/5 bg-alt/90 border-[1px] h-36 md:h-52 border-gray-100/10 flex justify-center rounded-3xl z-10  backdrop-blur-md'>
                  {validate ? (
                    <div className='flex items-center flex-col justify-around'>
                      <p className='font-extrabold text-gray-300'>{error} 😵</p>

                      <button
                        className='text-pinkWord bg-primary border-[1px] border-gray-100/10 font-bold rounded-3xl px-12 py-3'
                        onClick={() => {
                          setRun(!run);
                          setValidate(false);
                        }}
                      >
                        Retry
                      </button>
                    </div>
                  ) : (
                    <img src={gif} alt='Loading...' />
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
            <div className='mb-5 rounded-3xl bg-med/90 text-gray-400 lg:rounded-lg flex items-center border-[1px] border-gray-100/10'>
              <input
                type='text'
                placeholder='Search...'
                className='font-medium bg-transparent outline-none pl-5 py-3 basis-10/12'
              />
              <BiSearchAlt2 size={"1.3rem"} className='basis-2/12' />
            </div>
            <div className='h-52 md:h-72 rounded-lg relative'>
              <img
                src={pic5}
                className='object-cover h-full w-full rounded-lg'
                alt=''
              />

              <div className='absolute w-full h-2/5 bottom-0 bg-gray-900/20 flex items-center backdrop-blur-sm rounded-md'>
                <p className='lg:text-5xl text-2xl ml-5 text-gray-400 font-extrabold leading-tight'>
                  Discover Amazing Games...
                </p>
              </div>
            </div>

            <div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-5 mt-10 h-fit pb-28'>
              {games &&
                games.map((game) => {
                  return (
                    <div className='h-72' key={game.id}>
                      <img
                        src={game.background_image}
                        className='rounded-3xl w-full object-cover h-3/5 cursor-pointer'
                        alt='game-cover'
                        onClick={() => {
                          setGame(game.id);
                          setDisplay(true);
                        }}
                      />

                      {/* Title */}

                      <div className='h-2/5 pl-2 pt-3'>
                        <p
                          className='text-lg font-medium text-tealWord cursor-pointer'
                          onClick={() => {
                            setGame(game.id);
                            setDisplay(true);
                          }}
                        >
                          {game.name}
                        </p>

                        {/* Rating */}

                        <div className='flex items-center mt-1 text-gray-400'>
                          <p className='text-sm font-medium'>{game.rating}</p>
                          <FaStar
                            className='ml-1 text-yellow-500'
                            size={"0.8rem"}
                          />
                        </div>

                        {/* Categories */}

                        <div className='font-thin flex mt-1 -ml-3'>
                          {game.genres.map((genre) => (
                            <div className='bg-med/90 ml-2 border-[1px] truncate border-gray-100/10 rounded-3xl py-1.5 px-4'>
                              {genre.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>

          {/* Fixed Bottom Nav */}

          <Btlist />
        </div>
      </main>
    </React.Fragment>
  );
}

export default Game;
