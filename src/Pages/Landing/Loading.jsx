import React from 'react'
import coil from "../../assets/cccoil.svg"

function Loading() {
  return (
    <React.Fragment>
      <section className='min-h-screen shape overflow-y-hidden box-border w-full isolate bg-primary flex justify-center flex-col items-center text-text'>
        <div className='mx-10'>
          <p className='text-4xl md:text-7xl animate-slideleftmax font-bold tracking-wider custom'>
            NXTGaming
          </p>
          <p className='indent-10 lg:indent-20 text-xs font-thin md:text-base flick mt-3'>
            Level up your gaming experience with NXTGaming!
          </p>
        </div>

        <img
          src={coil}
          className='h-1/5 lg:h-1/2 animate-spin absolute -z-10'
          alt=''
        />
      </section>
    </React.Fragment>
  );
}

export default Loading