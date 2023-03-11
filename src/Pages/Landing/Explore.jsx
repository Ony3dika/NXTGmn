import React from "react";
import { InView } from "react-intersection-observer";
import pic2 from "../../assets/img22.jpg";
import pic3 from "../../assets/img24.jpg";
import pic4 from "../../assets/img20.jpg";

function Explore() {
  return (
    <React.Fragment>
      <section className='container mx-auto lg:px-10 px-5 md:px-10 pb-10 my-0 md:my-5 lg:my-10 text-text flex'>
        <InView triggerOnce={true} threshold={0.6}>
          {({ inView, ref, entry }) => (
            <div
              ref={ref}
              className={`basis-2/5 h-40 md:h-64 lg:h-96 opacity-0 relative isolate flex ${inView ? "animate-slideleft" : "" }`}
            >
              <img
                src={pic2}
                className='object-cover h-full w-7/12 md:w-2/5 rounded-full'
                alt='img'
              />
              <img
                src={pic3}
                className='object-cover h-full w-7/12 md:w-2/5 rounded-full'
                alt='img'
              />
              <img
                src={pic4}
                className='object-cover h-full w-7/12 md:w-2/5 rounded-full absolute z-10 ml-8 mt-5 md:ml-12 md:mt-8 lg:ml-24 lg:mt-10'
                alt='img'
              />
            </div>
          )}
        </InView>

        <InView triggerOnce={false} threshold={0.8}>
          {({ inView, ref, entry }) => (
            <div
              ref={ref}
              className={` basis-3/5 ${
                inView ? "animate-slideright" : "animate-slowfade"
              } `}
            >
              <h1 className='text-left ml-10 md:ml-0 lg:text-7xl text-xl lg:py-5 font-medium md:font-bold bg-clip-text text-transparent bg-gradient-to-r from-pinkWord via-tealWord to-orangeWord'>
                Explore more Trending Games
              </h1>

              <p className='text-sm lg:text-base lg:leading-normal hidden md:block leading-loose text-text'>
                Are you looking for some hot new games to play? Well, you're in
                luck, because there are always new and exciting games trending
                in the world of gaming. Whether you're into action-packed
                shooters, epic RPGs, or mind-bending puzzles, there's sure to be
                something for you to enjoy.
                <br />
                Whether you're a hardcore gamer or just looking for a fun way to
                pass the time, there's sure to be a game out there that's
                perfect for you. So why not dive in and explore the exciting
                world of gaming?
              </p>

              <button className='ml-10 md:ml-0 mt-5 md:text-2xl font-semibold text-primary px-4 md:px-12 py-3 bg-gradient-to-r from-pinkWord to-tealWord rounded-lg focus:bg-gradient-to-r focus:from-tealWord focus:to-pinkWord'>
                Explore More
              </button>
            </div>
          )}
        </InView>
      </section>
    </React.Fragment>
  );
}

export default Explore;
