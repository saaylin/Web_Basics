import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Button from './components/Button';
import Card from './components/Card';
import ListItem from './components/ListItem';

function App() {


  const [count, setCount] = useState(0);

  return (
    <div className="p-6 space-y-6">
      <div className="flex space-x-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-2xl font-bold">Vite + React</h1>

      <div className="card space-y-4">
        <Button label={`count is ${count}`} onClick={() => setCount(count + 1)} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

<Card name="John Doe" title="Architect & Engineer" imageUrl="https://via.placeholder.com/100" />

      <ListItem label="Coffee"/>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
