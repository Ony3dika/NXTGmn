import React from "react";
import pic2 from "../../assets/img14.jpg";
import pic3 from "../../assets/img16.jpg";
import pic4 from "../../assets/img18.jpg";
import pic5 from "../../assets/img15.png";
import pic6 from "../../assets/img19.jpg";
import pic7 from "../../assets/img17.jpg";
import pic8 from "../../assets/img9.jpg";

function Arrivals() {
  return (
    <React.Fragment>
      <section className='container mx-auto lg:px-10 px-5 md:px-10 lg:mt-10'>
        <h1 className='text-center lg:text-7xl text-2xl font-medium  bg-clip-text text-transparent bg-gradient-to-r from-pinkWord via-tealWord to-orangeWord border-b-4 border-pinkWord/40 py-5'>
          Outstanding Gaming Selection
        </h1>

        <p className='md:mt-10 mt-5 text-sm lg:text-base lg:leading-normal leading-loose text-text'>
          Introducing an outstanding game collection that is sure to thrill
          gamers of all levels and preferences. Our collection is carefully
          curated to include some of the best and most popular games from a
          variety of genres, ensuring that there is something for everyone.
          <br /> <br />
          From action-packed shooters to immersive role-playing games, our
          collection has it all. Each game has been selected for its outstanding
          gameplay, stunning graphics, and engaging storyline, making it a
          must-play for any serious gamer.
        </p>
      </section>

      <section className='container mx-auto lg:px-10 px-5 md:px-10 mt-10 pb-10'>
        <div className='flex justify-center'>
          <p className='text-center text-2xl lg:w-1/3 md:w-2/3 font-semibold text-primary px-12 py-3 bg-gradient-to-r from-pinkWord to-tealWord rounded-lg'>
            New Arrivals
          </p>
        </div>

        <div className='grid grid-cols-6 gap-2.5 lg:gap-6 mt-6'>
          <div className='h-16 md:h-32 lg:h-56 rounded-lg col-start-2 col-end-4'>
            <img
              src={pic2}
              alt=''
              className='object-cover w-full h-full rounded-lg'
            />
          </div>
          <div className='h-16 md:h-32 lg:h-56 rounded-lg col-start-4 col-end-6'>
            <img
              src={pic7}
              alt=''
              className='object-cover w-full h-full rounded-lg'
            />
          </div>
          <div className='h-16 md:h-32 lg:h-56 rounded-lg col-start-1 col-end-3'>
            <img
              src={pic4}
              alt=''
              className='object-cover w-full h-full rounded-lg'
            />
          </div>
          <div className='h-16 md:h-32 lg:h-56 rounded-lg col-start-3 col-end-5'>
            <img
              src={pic5}
              alt=''
              className='object-cover w-full h-full rounded-lg'
            />
          </div>
          <div className='h-16 md:h-32 lg:h-56 rounded-lg col-start-5 col-end-7'>
            <img
              src={pic6}
              alt=''
              className='object-cover w-full h-full rounded-lg'
            />
          </div>
          <div className='h-16 md:h-32 lg:h-56 rounded-lg col-start-2 col-end-4'>
            <img
              src={pic3}
              alt=''
              className='object-cover w-full h-full rounded-lg'
            />
          </div>
          <div className='h-16 md:h-32 lg:h-56 rounded-lg col-start-4 col-end-6'>
            <img
              src={pic8}
              alt=''
              className='object-cover w-full h-full rounded-lg'
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Arrivals;
