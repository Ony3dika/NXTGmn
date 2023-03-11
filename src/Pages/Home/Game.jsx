import React, { useState } from "react";
import Navbar from "../../Components/Nav.jsx";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { incremented } from "../../Features/Counter/counter-slice";
import {BiSearchAlt2} from "react-icons/bi"
import List from "./List.jsx";
import Btlist from "./Btlist.jsx";
import pic5 from "../../assets/img15.jpg";

function Game() {
  const [act, setAct] = useState({});

  const fetcher = () => {
    const options = {
      method: "GET",
      url: "https://rawg-video-games-database.p.rapidapi.com/genres/action?key=f58d8c3022554fca911687f4e440b514",
      headers: {
        "X-RapidAPI-Key": "8755e71222msh09f429617efba1ap1fe33bjsn0d2e97b3c98b",
        "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);

        setAct(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <React.Fragment>
      <main className='min-h-screen box-border w-full bg-primary'>
        <Navbar />

        <div className='pt-24 lg:pt-32 md:pt-28 px-5 md:px-10 flex flex-col lg:flex-row text-text'>
          <List />

          <section className=' basis-full lg:basis-3/4 lg:pl-8'>
            {/* <button className='w-full flex text-gray-400 bg-alt rounded-lg px-10 py-3 lg:pl-10' onClick={fetcher}>
              Click
            </button> */}
            {/* 
            {
              act &&
              <img src={act.image_background} alt="hvhv"/>
            } */}

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
                className='object-cover h-full w-full rounded-lg text-gray-400'
                alt=''
              />

              <div className="absolute w-full h-2/5 bottom-0 bg-gray-900/20 backdrop-blur-sm rounded-md"></div>
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
