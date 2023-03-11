import React from "react";
import { MdExplore, MdSportsBasketball } from "react-icons/md";
import { GiPistolGun, GiF1Car } from "react-icons/gi";
import { RiSwordFill } from "react-icons/ri";

function List() {
  return (
    <React.Fragment>
      <section className='h-[calc(100vh-10rem)] lg:block hidden sticky left-0 top-32 bg-med/60 border-[1px] border-gray-100/10 basis-full lg:basis-1/5 rounded-lg p-4'>
        <h3 className='font-semibold mt-5'>CATEGORIES</h3>
        <div className='ml-3 mt-5'>
          <button className='w-full flex text-gray-400 focus:bg-alt/70 focus:rounded-lg  hover:text-white focus:text-tealWord rounded-lg transition-all duration-300 ease-linear px-4 py-3 my-3'>
            <GiPistolGun size={"1.3rem"} className='mr-2 mt-1' />
            Action
          </button>
          <button className='w-full flex text-gray-400 focus:bg-alt/70 focus:rounded-lg  hover:text-white focus:text-tealWord rounded-lg transition-all duration-300 ease-linear px-4 py-3 my-3'>
            <MdExplore size={"1.3rem"} className='mr-2 mt-1' />
            Adventure
          </button>

          <button className='w-full flex text-gray-400 focus:bg-alt/70 focus:rounded-lg  hover:text-white focus:text-tealWord rounded-lg transition-all duration-300 ease-linear px-4 py-3 my-3'>
            <MdSportsBasketball size={"1.3rem"} className='mr-2 mt-1' />
            Sports
          </button>
          <button className='w-full flex text-gray-400 focus:bg-alt/70 focus:rounded-lg  hover:text-white focus:text-tealWord rounded-lg transition-all duration-300 ease-linear px-4 py-3 my-3'>
            <RiSwordFill size={"1.3rem"} className='mr-2 mt-1' />
            Role Playing
          </button>
          <button className='w-full flex text-gray-400 focus:bg-alt/70 focus:rounded-lg  hover:text-white focus:text-tealWord rounded-lg transition-all duration-300 ease-linear px-4 py-3 my-3'>
            <GiF1Car size={"1.3rem"} className='mr-2 mt-1' />
            Racing
          </button>
        </div>
        <p className='text-lg lg:text-2xl custom bg-clip-text text-transparent bg-gradient-to-r from-pinkWord via-tealWord to-orangeWord mt-10'>
          NXTGaming
        </p>
        <p className='font-medium text-xs bg-clip-text text-transparent bg-gradient-to-r from-pinkWord via-tealWord to-orangeWord'>
          Level up your gaming experience with NXTGaming!
        </p>
      </section>
    </React.Fragment>
  );
}

export default List;
