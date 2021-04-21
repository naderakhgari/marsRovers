import React, { useEffect, useState } from 'react'

import Rover from './Rover'
import MarsRoverForm from './MarsRoverForm';

const MarsRovers = () => {

    const [roverData, setRoverData] = useState([])
    const [isAdded, setIsAdded] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:4444/rovers`)
            .then((res) => res.json())
            .then((data) => setRoverData(data))
            .catch((err) => console.error(err));
    }, [])

    return (
        <div className='rovers-container'>
            <h1 className='rovers-header'>Mars Rovers</h1>
            <div className='rovers'>
                {roverData.length > 0 ? (
                    roverData.map((rover, index) => <Rover rover={rover} key={index} />)
                ) : null}
            </div>
            <div className='rover-form'>
                {isAdded ? (
                    <MarsRoverForm setIsAdded={setIsAdded} />
                ) : null}
            </div>
            <button onClick={() => setIsAdded(true)} className='btn-style'>New Rover</button>
        </div>
    )
}
export default MarsRovers