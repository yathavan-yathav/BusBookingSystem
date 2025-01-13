import React, { useEffect,  useState} from 'react';
import { fetchData } from './api';

function App() {
  const[message, setMessage] = useState('');

  useEffect(() =>{
    fetchData().then(setMessage);
  }, []);

  return(
    <div>
      <h1>Frontend</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;








