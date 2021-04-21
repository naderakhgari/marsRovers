import React, { useEffect, useState } from 'react'

import Rover from './Rover'

const MarsRovers = ({ setIsAdded }) => {

    const [roverData, setRoverData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4444/rovers`)
            .then((res) => res.json())
            .then((data) => setRoverData(data))
            .catch((err) => console.error(err));
    }, [])

    return (
        <div>
            <h1>Mars Rovers</h1>
            <div>
                {roverData.length > 0 ? (
                    roverData.map((rover,index) => <Rover rover={rover} key={index}/>)
                ) : null}
            </div>
            <button onClick={() => setIsAdded(true)}>New Rover</button>
        </div>
    )
}
export default MarsRovers