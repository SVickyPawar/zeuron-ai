import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import group from './assets/Group.png';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Human from './components/Human/Human';
import { Routes,Route } from 'react-router-dom';
import Optimetry from './components/Optimetry/Optimetry';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <Sidebar/>
        <div>
          <Routes>
            <Route path='/' element={ <Human/>}/>
            <Route path='/optimetry' element={ <Optimetry/>}/>
          </Routes>
         
        </div>
    </div>
      
    </>
  )
}

export default App
