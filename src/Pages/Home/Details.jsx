import React, { useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import{RxDotFilled} from "react-icons/rx"
import gif from "../../assets/ripple2.svg";

function Details(props) {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [executed, setExecuted] = useState(false);
  const [id, setId] = useState("")
  const [error, setError] = useState("");
  const [validate, setValidate] = useState(false);

  const getGameDetails = () => {
    const options = {
      method: "GET",
      url: `https://rawg-video-games-database.p.rapidapi.com/games/${props.game}?key=f58d8c3022554fca911687f4e440b514`,

      headers: {
        "X-RapidAPI-Key": "8755e71222msh09f429617efba1ap1fe33bjsn0d2e97b3c98b",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setDetails(response.data);
        console.log(response.data);
        setId(response.data.id)
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setError(error.message);
        setValidate(true);
      });
    setExecuted(true);
  };

  {
    executed ? "" : getGameDetails();
  }
  return (
    <React.Fragment>
      <main className='h-screen box-border w-full fixed top-0 left-0 pt-16 lg:pt-16 md:pt-28 z-10 flex justify-center bg-black/80'>
        <div className='w-11/12 h-[96%] overflow-y-scroll pb-5 px-3 md:px-12 bg-primary rounded-lg'>
          {/* Loading Icon  */}
          {loading ? (
            <div className='w-full h-1/10 flex justify-center fixed left-0'>
              <div className='w-2/5 mt-10 h-36 md:h-52 bg-alt border-[1px] border-gray-100/10 flex justify-center rounded-3xl z-10  backdrop-blur-md'>
                {validate ? (
                  <div className='flex items-center flex-col justify-around'>
                    <p className='font-extrabold text-gray-300'>{error} 😵</p>

                    <button
                      className='text-pinkWord bg-primary border-[1px] border-gray-100/10 font-bold rounded-3xl px-12 py-3'
                      onClick={() => {
                        setValidate(false);
                        getGameDetails();
                      }}
                    >
                      Retry
                    </button>
                  </div>
                ) : (
                  <img src={gif} alt='Loading...' />
                )}
              </div>
            </div>
          ) : (
            ""
          )}

          {/* Close Button */}
          <div className='bg- p-5 w-full flex justify-end'>
            <IoIosCloseCircle
              className='hover:text-pinkWord absolute transition-all duration-100 ease-linear'
              size={"2rem"}
              onClick={() => props.show()}
            />
          </div>

          {/* Game Details  */}
          <div>
            <div className='flex'>
              <div className='basis-2/4 md:h-48 lg:h-72'>
                <img
                  className='object-cover w-full h-full md:h-full rounded-lg'
                  src={details.background_image}
                  alt=''
                />
              </div>

              <div className='md:pl-6 ml-3 md:ml-5 flex flex-col justify-center basis-3/5'>
                <p className='text-lg lg:text-3xl font-bold text-tealWord cursor-pointer'>
                  {details.name}
                </p>

                {/* Game Devs */}
                <p className='lg:mt-5 mt-1 md:mt-3 overflow-hidden h-6 text-white/80'>
                  {details.released}
                  {details.developers &&
                    details.developers.map((dev) => (
                      <span className='ml-1' key={dev.id}>
                        {dev.name}
                      </span>
                    ))}
                </p>

                <div className='flex items-center lg:mt-5 mt-1 text-white/80'>
                  <p>{details.rating}</p>

                  <FaStar className='ml-1 text-yellow-500' size={"0.8rem"} />
                </div>
              </div>
            </div>

            <p className=' text-gray-400 mt-5 text-sm lg:text-base lg:leading-normal md:block leading-loose'>
              {details.description_raw}
            </p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Details;
