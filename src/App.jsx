import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import group from './assets/Group.png';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Human from './components/Human/Human';
import { Routes,Route } from 'react-router-dom';
import Optimetry from './components/Optimetry/Optimetry';
import Neurology from './components/Neurology/Neurology';
import Phulmonology from './components/Phulmonology/Phulmonology';
import Cardiology from './components/Cardiology/Cardiology';
import Radiography from './components/Radiography/Radiography';
import Darmatology from './components/Darmatology/Darmatology';
import Analysis from './components/Analysis/Analysis';
import Help from './components/Help/Help';
import Settings from './components/Setings/Settings';

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
            <Route path='/neurology' element={ <Neurology/>}/>
            <Route path='/phulmonology' element={ <Phulmonology/>}/>
            <Route path='/cardiology' element={ <Cardiology/>}/>
            <Route path='/radiography' element={ <Radiography/>}/>
            <Route path='/darmatology' element={ <Darmatology/>}/>
            <Route path='/analysis' element={ <Analysis/>}/>
            <Route path='/help' element={ <Help/>}/>
            <Route path='/settings' element={ <Settings/>}/>
          </Routes>
         
        </div>
    </div>
      
    </>
  )
}

export default App
