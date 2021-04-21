import React, { useState } from 'react'

import Rover from './Rover'

const MarsRovers = () => {

    const [roverData, setRoverData] = useState([])
    
    fetch(`http://localhost:4444/rovers`)
        .then((res) => res.json())
        .then((data) => setRoverData(data))
        .catch((err) => console.error(err));

    return (
        <div>
            <h1>Mars Rovers</h1>
            <div>
                {roverData.length > 0 ? (
                    roverData.map(rover => <Rover rover={rover} />)
                ) : null}
            </div>
            <button>New Rover</button>
        </div>
    )
}
export default MarsRovers