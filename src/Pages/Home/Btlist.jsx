import React from 'react'
import { MdExplore, MdSportsBasketball } from "react-icons/md";
import { GiPistolGun, GiF1Car } from "react-icons/gi";
import { RiSwordFill } from "react-icons/ri";

function Btlist() {
  return (
    <React.Fragment>
      <section className='lg:hidden h-20 md:h-32 justify-center flex fixed bottom-5 left-0 w-full'>
        <div className='bg-med/90 backdrop-blur-sm border-[1px] border-gray-100/10 rounded-3xl h-full basis-full mx-10 flex justify-around'>
          <button className=' text-gray-400 focus:bg-alt/70 focus:rounded-2xl focus:text-tealWord rounded-lg transition-all duration-300 ease-linear md:px-10 px-4 my-3'>
            <GiPistolGun size={"1.3rem"} />
          </button>
          <button className=' text-gray-400 focus:bg-alt/70 focus:rounded-2xl focus:text-tealWord rounded-lg transition-all duration-300 ease-linear md:px-10 px-4 my-3'>
            <MdExplore size={"1.3rem"} />
          </button>
          <button className=' text-gray-400 focus:bg-alt/70 focus:rounded-2xl focus:text-tealWord rounded-lg transition-all duration-300 ease-linear md:px-10 px-4 my-3'>
            <MdSportsBasketball size={"1.3rem"} />
          </button>
          <button className=' text-gray-400 focus:bg-alt/70 focus:rounded-2xl focus:text-tealWord rounded-lg transition-all duration-300 ease-linear md:px-10 px-4 my-3'>
            <RiSwordFill size={"1.3rem"} />
          </button>
          <button className=' text-gray-400 focus:bg-alt/70 focus:rounded-2xl focus:text-tealWord rounded-lg transition-all duration-300 ease-linear md:px-10 px-4 my-3'>
            <GiF1Car size={"1.3rem"} />
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Btlist