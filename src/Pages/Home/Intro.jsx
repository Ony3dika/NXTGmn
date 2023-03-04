import React from 'react'
import pic1 from "../../assets/img12.jpg";
import { InView } from "react-intersection-observer";

function Intro() {
  return (
    <React.Fragment>
      <section className='container mx-auto lg:px-10 pt-24 lg:pt-32 md:pt-28 px-5 md:px-10  flex lg:flex-row flex-col'>
        <InView triggerOnce={true} threshold={0.6}>
          {({ inView, ref, entry }) => (
            <div
              ref={ref}
              className={`lg:basis-2/3 basis-full opacity-0 relative isolate ${
                inView ? "animate-slideup" : " "
              }`}
            >
              <p className='lg:text-8xl text-4xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pinkWord via-tealWord to-orangeWord bg-[200%]'>
                Identify, Collect, and Explore Rare Games
              </p>

              <p className='text-sm lg:text-base leading-loose lg:leading-normal lg:mt-10 text-text lg:px-5 py-5 lg:mr-5 rounded-xl backdrop-blur-3xl bg-gradient-to-r from-primary to-alt/10'>
                Introducing the ultimate gaming recommendation and information
                app, designed for gamers of all levels and preferences. Whether
                you're a hardcore gamer or just looking for a casual way to pass
                the time, our app has got you covered. With our app, you'll be
                able to discover new games that match your interests and
                preferences, get detailed information about each game, and
                connect with other gamers who share your passion for gaming.
              </p>

              <div className='aspect-square w-1/3 absolute rounded-full translate-y-[-90%] translate-x-24 -z-10 bg-tealWord/10 blur-2xl'></div>
            </div>
          )}
        </InView>
        <InView triggerOnce={true} threshold={0.6}>
          {({ inView, ref, entry }) => (
            <div ref={ref} className={`lg:basis-1/3 basis-full opacity-0 ${inView ? "animate-slideup2" : " " }`}>
              <img
                src={pic1}
                className='rounded-xl h-3/4 object-cover w-full'
                alt='image1'
              />

              <p className='text-sm lg:text-base leading-loose lg:leading-normal text-text mt-5'>
                Art, also called (to distinguish it from other art forms) visual
                art. a visual object or experience consciously created through
                an expression of skill or imagination.
              </p>
            </div>
          )}
        </InView>
      </section>
    </React.Fragment>
  );
}

export default Intro