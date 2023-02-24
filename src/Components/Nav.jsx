import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBloggerB } from "react-icons/fa";
import { MdContactPage, MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { GiShop } from "react-icons/gi";

function Nav() {
  const [menu, setMenu] = useState(false);
  return (
    <nav
      className={`flex flex-row md:px-12 lg:px-0 h-auto fixed z-10 top-0 bg-primary lg:bg-primary/70 lg:backdrop-blur-3xl lg:justify-between w-screen  text-white py-6 `}
    >
      <section className='lg:basis-1/4 px-4 basis-full lg:block flex lg:px-0 justify-between lg:text-center text-lg lg:text-2xl font-bold'>
        <h3>NXTGaming</h3>
        <div>
          <FiMenu
            size={"1.5rem"}
            className={`lg:hidden mt-1 ${menu ? "hidden" : "block"}`}
            onClick={() => setMenu(true)}
          />
        </div>
      </section>

      <section className='lg:basis-3/4 lg:flex lg:flex-row flex-col hidden justify-around font-thin'>
        <Link className='px-4 py-2 my-3 lg:my-0  focus:bg-alt/70 focus:rounded-lg focus:text-tealWord hover:text-pinkWord transition-all duration-300 ease-linear flex'>
          <FaHome size={"1.3rem"} className='mr-2' />
          Home
        </Link>
        <Link className='px-4 py-2 my-3 lg:my-0  focus:bg-alt/70 focus:rounded-lg focus:text-tealWord hover:text-pinkWord transition-all duration-300 ease-linear flex'>
          <GiShop size={"1.3rem"} className='mr-2' />
          Marketplace
        </Link>
        <Link className='px-4 py-2 my-4 lg:my-0 focus:bg-alt/70 focus:rounded-lg focus:text-tealWord hover:text-pinkWord transition-all duration-300 ease-linear flex'>
          <FaBloggerB size={"1.3rem"} className='mr-2' />
          Blog
        </Link>
        <Link className='my-3 lg:my-0  focus:bg-alt/70 focus:rounded-lg focus:text-tealWord flex rounded-lg transition-all duration-300 ease-linear px-4 py-2'>
          <MdContactPage size={"1.3rem"} className='mr-2' />
          Contact
        </Link>
      </section>

      {/* Sidebar */}
      <section
        className={`flex-col justify-around lg:hidden font-thin rounded-r-xl h-screen w-2/3 backdrop-blur-3xl bg-gradient-to-b from-sub/50 to-primary/90 fixed left-0 top-0 z-10 transition-all ${
          menu ? "left-0" : "left-[-100%]"
        } `}
      >
        <div className='flex my-5 px-4 justify-between'>
          <h3 className='text-lg font-bold'>NXTGaming</h3>
          <div>
            <MdClose
              size={"1.5rem"}
              className='lg:hidden mt-1'
              onClick={() => setMenu(false)}
            />
          </div>
        </div>
        <Link className='px-4 py-3 my-4 rounded-lg focus:mx-4 focus:bg-primary/90  focus:text-tealWord transition-all duration-300 ease-linear flex'>
          <FaHome size={"1.3rem"} className='mr-2' />
          Home
        </Link>
        <Link className='px-4 rounded-lg py-3 my-4 focus:mx-4 focus:bg-primary/90  focus:text-tealWord transition-all duration-300 ease-out flex'>
          <GiShop size={"1.3rem"} className='mr-2' />
          Marketplace
        </Link>
        <Link className='px-4 py-3 my-4 rounded-lg focus:mx-4 focus:bg-primary/90  focus:text-tealWord transition-all duration-300 ease-linear flex'>
          <FaBloggerB size={"1.3rem"} className='mr-2' />
          Blog
        </Link>
        <Link className='my-4 py-3 flex rounded-lg focus:mx-4 focus:bg-primary/90  focus:text-tealWord transition-all duration-300 ease-linear px-4 '>
          <MdContactPage size={"1.3rem"} className='mr-2' />
          Contact
        </Link>
      </section>
    </nav>
  );
}

export default Nav;
