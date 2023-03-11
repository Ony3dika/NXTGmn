import React from "react";
import { FaTwitter, FaFacebookSquare, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <React.Fragment>
      <section className='container mx-auto lg:px-10 py-5 pb-10 lg:py-10 px-5 md:px-10 flex justify-between align-baseline border-t-2 border-tealWord rounded-t-lg text-sm lg:text-base lg:leading-normal leading-loose text-text'>
        <div className='basis-2/5 md:basis-1/5 font-bold'>
          <p className=' custom'>NXTGaming</p>
          <p className='font-semibold'>All right Reserved</p>
        </div>

        <div className='basis-3/5 hidden md:block text-center font-medium'>
          <p>2023 © NXTGaming, Behind The Games</p>
        </div>

        <div className='flex justify-around md:justify-between basis-3/5 md:basis-1/5'>
          <button className='hover:text-pinkWord focus:text-tealWord transition-all ease-in duration-300 bg-alt/70 p-3 px-5 rounded-md'>
            <FaTwitter size={"1.3rem"} />
          </button>
          <button className='hover:text-pinkWord focus:text-tealWord transition-all ease-in duration-300 bg-alt/70 p-3 px-5 rounded-md'>
            <FaFacebookSquare size={"1.3rem"} />
          </button>
          <button className='hover:text-pinkWord focus:text-tealWord transition-all ease-in duration-300 bg-alt/70 p-3 px-5 rounded-md'>
            <FaGithub size={"1.3rem"} />
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Footer;
