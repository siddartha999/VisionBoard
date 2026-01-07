import { Route, Routes } from 'react-router'
import './App.css'
import DBDHome from './pages/DayByDay'
import HomePage from './HomePage';

function App() {


  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='daybyday' element={<DBDHome />} />
      </Routes>

    </>
  )
}

export default App
