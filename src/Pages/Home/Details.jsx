import React, { useState } from "react";
import axios from "axios";
import { FaWindowClose, FaStar } from "react-icons/fa";
import gif from "../../assets/ripple2.svg";

function Details(props) {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [executed, setExecuted] = useState(false);
  const getGameDetails = () => {
    console.log();
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
        console.log(response.data);
        setDetails(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
    setExecuted(true);
  };

  {
    executed ? "" : getGameDetails();
  }
  return (
    <React.Fragment>
      <main className='h-screen box-border w-full fixed top-0 left-0 pt-24 lg:pt-16 md:pt-28 z-10 flex justify-center bg-black/80'>
        <div className='w-11/12 h-[96%] overflow-y-scroll pb-5 px-3 md:px-12 bg-primary rounded-lg'>
          {loading ? (
            <div className='w-full pointer-events-none h-1/10 flex justify-center fixed left-0'>
              <div className='w-2/5 bg-alt border-[1px] border-gray-100/10 flex justify-center rounded-3xl z-10  backdrop-blur-md'>
                <img src={gif} alt='Loading...' />
              </div>
            </div>
          ) : (
            ""
          )}
          <div className='bg- p-5 w-full flex justify-end'>
            <FaWindowClose
              className='hover:text-pinkWord transition-all duration-100 ease-linear'
              size={"1.3rem"}
              onClick={() => props.show()}
            />
          </div>

          <div>
            <div className='flex md:h-72'>
              <div className='basis-2/5 lg:h-72'>
                <img
                  className='object-cover h-full w-full rounded-lg'
                  src={details.background_image}
                  alt=''
                />
              </div>

              <div className='ml-3 md:ml-5 basis-3/5'>
                <p className='text-lg lg:text-3xl font-medium text-tealWord cursor-pointer'>
                  {details.name}
                </p>

                <div className='flex items-center mt-1'>
                  <p>{details.rating}</p>
                  <FaStar className='ml-1 text-yellow-500' size={"0.8rem"} />
                </div>

                <p className='mt-1 md:mt-3'>
                  Developers:
                  {details.developers &&
                    details.developers.map((dev) => (
                      <span className='text-gray-400 ml-2' key={dev.id}>
                        {dev.name},
                      </span>
                    ))}
                </p>
              </div>
            </div>
            <p className='mt-5 text-gray-400 text-sm lg:text-base lg:leading-normal md:block leading-loose'>
              {details.description_raw}
            </p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Details;
