import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Home'
import { DBDLanding } from './pages/DayByBay'

function App() {

  return (
    <>
      <div id="header" className='text-2xl flex justify-between'>
        <p className='text-left p-4'>
          Vision Board
        </p>
        <p className='text-right p-4'>
          Profile
        </p>
      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dbd' element={<DBDLanding />} />
      </Routes>

    </>
  )
}

export default App
