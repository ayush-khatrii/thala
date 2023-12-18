import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import PlayButton from './PlayButton'
import PauseButton from './PauseButton'
import sound from "./assets/koyal.mp3"
const App = () => {

  const [input, setinput] = useState("");
  const [count, setcount] = useState("");
  const [thalaGif, setThalaGif] = useState(null);
  // audio.src = './assets/koyal.mp3'
  // audio.type = 'audio/mp3';
  const audio = new Audio(sound);

  const handleChange = (e) => {
    setinput(e.target.value);
  }

  const handleReset = () => {
    window.location.reload();
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const len = input.length;

    if (len === 7 || input === "7") {
      setThalaGif(true)
    }
    else {
      setThalaGif(false)
    }

  }

  useEffect(() => {
    if (thalaGif === true) {
      audio.play();
    }
    else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [thalaGif]);

  return (
    <>
      <section className='flex justify-center flex-col items-center text-center  mx-auto  mt-8'>

        {/* Thala */ }
        <div className='thala flex  items-center   justify-center gap-5 text-center mx-10'>
          <img
            src="https://images.deccanherald.com/deccanherald%2F2023-10%2F40a4bb11-75b0-4ced-9670-9a2766c90246%2FMSD_Hairdo.jpg?rect=373%2C0%2C540%2C720"
            alt="ms dhoni"
            className='rounded-md w-auto h-32  object-cover border cursor-pointer border-yellow-500 ' />
          <div className='flex flex-col gap-2'>

            <p className="text-white w-full md:text-center text-left text-lg font-bold sm:text-4xl">
              Thala For A Reason😎
            </p>
            {/* <div className='absolute mt-12'>
              <div className="absolute" onClick={ handlePause } >
                <PauseButton handlePause={ handlePause } />
              </div>
              <div className='absolute' onClick={ handlePlay }>
                <PlayButton handlePlay={ handlePlay } />
              </div>
            </div> */}
          </div>
        </div>


        {/* Form */ }
        <form onSubmit={ handleSubmit }>
          <div className="max-w-3xl mx-5 items-center text-center mt-20 flex justify-center gap-3">
            <input
              type="text"
              value={ input }
              onChange={ handleChange }
              placeholder="Enter something..."
              className="w-full pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg"
            />
            <button
              type='submit'
              className='font-semibold bg-yellow-500 py-2 px-2 rounded-md'>
              Check
            </button>
            <button
              type='button'
              onClick={ handleReset }
              className='font-semibold border text-gray-400 py-2 px-2 rounded-md'>
              Reset
            </button>
          </div>
        </form>

        {/* Results */ }
        <div className="results my-10">
          {
            thalaGif === true ? (
              <div className="thala-gif flex justify-center flex-col items-center gap-3">
                <p className='text-gray-300'>{ input } : Thala for a reason 😎</p>
                <img src="https://media1.tenor.com/m/xKeJyC9B4IkAAAAd/bole-jo-koyal.gif" alt="" />
              </div>
            ) : thalaGif === false ? (
              <div className="nothala-gif">
                <p className='text-gray-300'> { input } : No thala!  </p>
                <img src="https://media1.tenor.com/m/7EARS8fOvkkAAAAd/band-karo.gif" alt="" />
              </div>
            ) : (
              <span className="text-gray-300 text-center">Enter something to check. </span>
            )
          }
        </div>
        {/* Footer */ }
        <footer className="absolute bottom-0 flex justify-center mt-32 mb-12 text-gray-400 text-xl text-center">
          <h1 className="font-bold">Developed By <a href="#" className="text-yellow-500 underline">Ayush Khatri</a></h1>
        </footer>
      </section>


    </>
  )
}

export default App