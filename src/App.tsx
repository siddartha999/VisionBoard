import { NavLink, Route, Routes } from 'react-router'
import './App.css'
import Home from './Home'
import { DayView, DBDDaily, DBDLanding, DBDYear } from './pages/DayByBay'

function App() {

  return (
    <>
      <div id="header" className='text-2xl flex justify-between'>
        <NavLink to='/'>
          <p className='text-left p-4 cursor-pointer'>
            Vision Board
          </p>
        </NavLink>
        <p className='text-right p-4'>
          Profile
        </p>
      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dbd' element={<DBDLanding />} />
        <Route path='/dbd/:year' element={<DBDYear />} />
        <Route path='/dbd/:year/:month' element={<DBDDaily />} />
        <Route path='/dbd/:year/:month/:day' element={<DayView />} />
      </Routes>

    </>
  )
}

export default App
