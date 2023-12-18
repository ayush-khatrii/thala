import React from 'react'

const PauseButton = ({ handlePlay }) => {
    return (
        <button onClick={ handlePlay } className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#fff" classD="bi bi-pause cursor-pointer" viewBox="0 0 16 16">
                <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" />
            </svg>
        </button>
    )
}

export default PauseButton