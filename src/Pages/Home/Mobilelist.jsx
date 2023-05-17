import React from "react";
import { MdExplore, MdSportsBasketball } from "react-icons/md";
import { GiPistolGun, GiF1Car } from "react-icons/gi";
import { RiSwordFill } from "react-icons/ri";

function Btlist(props) {
  return (
    <React.Fragment>
      <section className='lg:hidden h-16 md:h-32 justify-center flex fixed bottom-5 left-0 w-full'>
        <div className='bg-med/90 backdrop-blur-sm border-[1px] border-gray-100/10 rounded-3xl h-full basis-full items-center mx-10 flex justify-around'>
          {/* Action */}
          <a href='#top'>
            <button
              onClick={() =>
                props.genre(
                  "https://rawg-video-games-database.p.rapidapi.com/games?genres=action&key=f58d8c3022554fca911687f4e440b514&page=1&page_size=21"
                )
              }
              className=' text-gray-400 focus:bg-alt/70 focus:rounded-2xl focus:text-tealWord rounded-lg transition-all duration-300 ease-linear md:px-10 px-4 md:py-8 py-3'
            >
              <GiPistolGun size={"1.3rem"} />
            </button>
          </a>

          {/* Adventure */}
          <a href='#top'>
            <button
              onClick={() =>
                props.genre(
                  "https://rawg-video-games-database.p.rapidapi.com/games?genres=adventure&key=f58d8c3022554fca911687f4e440b514&page=1&page_size=21"
                )
              }
              className=' text-gray-400 focus:bg-alt/70 focus:rounded-2xl focus:text-tealWord rounded-lg transition-all duration-300 ease-linear md:px-10 px-4 md:py-8 py-3'
            >
              <MdExplore size={"1.3rem"} />
            </button>
          </a>

          {/* Sports */}
          <a href='#top'>
            <button
              onClick={() =>
                props.genre(
                  "https://rawg-video-games-database.p.rapidapi.com/games?genres=sports&key=f58d8c3022554fca911687f4e440b514&page=1&page_size=21"
                )
              }
              className=' text-gray-400 focus:bg-alt/70 focus:rounded-2xl focus:text-tealWord rounded-lg transition-all duration-300 ease-linear md:px-10 px-4 md:py-8 py-3'
            >
              <MdSportsBasketball size={"1.3rem"} />
            </button>
          </a>

          {/* RPG */}
          <a href='#top'>
            <button
              onClick={() =>
                props.genre(
                  "https://rawg-video-games-database.p.rapidapi.com/games?genres=role-playing-games-rpg&key=f58d8c3022554fca911687f4e440b514&page=1&page_size=21"
                )
              }
              className=' text-gray-400 focus:bg-alt/70 focus:rounded-2xl focus:text-tealWord rounded-lg transition-all duration-300 ease-linear md:px-10 px-4 md:py-8 py-3'
            >
              <RiSwordFill size={"1.3rem"} />
            </button>
          </a>

          {/* Racing */}
          <a href='#top'>
            <button
              onClick={() =>
                props.genre(
                  "https://rawg-video-games-database.p.rapidapi.com/games?genres=racing&key=f58d8c3022554fca911687f4e440b514&page=1&page_size=21"
                )
              }
              className=' text-gray-400 focus:bg-alt/70 focus:rounded-2xl focus:text-tealWord rounded-lg transition-all duration-300 ease-linear md:px-10 px-4 md:py-8 py-3'
            >
              <GiF1Car size={"1.3rem"} />
            </button>
          </a>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Btlist;
