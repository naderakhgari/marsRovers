import { useState } from "react"

const MarsRoverForm = ({ setIsAdded }) => {
    const [name, setName] = useState('')

    const inputHandler = (e) => {
        const { value } = e.target
        setName(value)
    }

    const launchHanddler = () => {
        fetch(`http://localhost:4444/add-rover/${name}`, {
            method: "POST",
        })
    }

    return (
        <div className='new-rover App'>
            <h1>New Rover</h1>
            <form>
                <h3>Launch new rover to mars</h3>
                <input onChange={inputHandler} name={'name'} value={name} type='text' />
                <div>
                    <button onClick={() => setIsAdded(false)}>Cancel</button>
                    <button onClick={launchHanddler}>Launch</button>
                </div>
            </form>
        </div>
    )
}

export default MarsRoverForm