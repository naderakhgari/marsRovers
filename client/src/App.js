import { useState } from 'react';

import './App.css';
import MarsRovers from './Components/MarsRovers';
import MarsRoverForm from './Components/MarsRoverForm';

function App() {
  const [isAdded, setIsAdded] = useState(false)

  return (
    <div className="App">
      <MarsRovers setIsAdded={setIsAdded} />
      {isAdded ? (
        <MarsRoverForm setIsAdded={setIsAdded} />
      ) : null}
    </div>
  );
}

export default App;
