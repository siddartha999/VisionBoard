import { Route, Routes } from 'react-router'
import './App.css'
import {DBDDailyView, DBDHome, DBDYearlyView} from './pages/DayByDay'
import HomePage from './HomePage';

function App() {


  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='daybyday' element={<DBDHome />} />
        <Route path='daybyday/:year' element={<DBDYearlyView />} />
        <Route path='daybyday/:year/:monthandday' element={<DBDDailyView />} />
      </Routes>

    </>
  )
}

export default App
