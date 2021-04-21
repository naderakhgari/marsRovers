const Rover = ({ rover }) => {
    return (
        <div className='rover-block'>
            <h2 className='name'>{rover.name}</h2>
            <h3 className='state'>{rover.state}</h3>
        </div>
    )
}
export default Rover