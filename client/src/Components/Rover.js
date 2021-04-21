const Rover = ({rover})=>{
    return(
        <div>
            <h2>{rover.name}</h2>
            <h3>{rover.state}</h3>
        </div>
    )
}
export default Rover