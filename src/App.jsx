import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import group from './assets/Group.png';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Human from './components/Human/Human';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <Sidebar/>
        <div>
          <Human/>
        </div>
    </div>
      
    </>
  )
}

export default App
