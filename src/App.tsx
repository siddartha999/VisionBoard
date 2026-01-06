import './App.css'

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


      <div className='p-4'>

        <p className='text-2xl'>Overview:</p>

        <p className='text-xl pt-4'>1) Components:</p>
        <p className='xl pt-2'>Reading</p>
        <p className='xl pt-2'>Writing</p>
        <p className='xl pt-2'>Training</p>
        <p className='xl pt-2'>Listening</p>
        <p className='xl pt-2'>Memories</p>
        <p className='xl pt-2'>Gaming</p>

        <p className='text-xl pt-4'>2) Customizable themes</p>

        <p className='text-xl pt-4'>3) Timeline</p>
      </div>

    </>
  )
}

export default App
