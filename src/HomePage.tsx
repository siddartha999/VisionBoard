import { NavLink } from "react-router";

const HomePage = () => {
    return (
        <>
            <div id="header" className='text-2xl flex justify-between'>
                <p className='text-left p-4'>Vision Board</p>
                <p className='text-right p-4'>Profile</p>
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

        <div className='mt-16 flex cursor-pointer'>
            <div className='w-[20rem] h-[20rem] bg-gray-800 ml-16'>
                <p className='text-2xl text-center relative top-[50%]'>The Journal</p>
                <p className='text-md text-center relative top-[50%] mt-2'>Your hub to expressed long chain thoughts and emotions</p>
            </div>
            <NavLink to="/daybyday">
            <div className='w-[20rem] h-[20rem] cursor-pointer bg-gray-800 ml-16'>
                    <p className='text-2xl text-center relative top-[50%]'>Day by Day</p>
                    <p className='text-md text-center relative top-[50%] mt-2'>Log your daily activity</p>
            </div>
            </NavLink>
            <div className='w-[20rem] h-[20rem] cursor-pointer bg-gray-800 ml-16'>
                <p className='text-2xl text-center relative top-[50%]'>Reviews</p>
                <p className='text-md text-center relative top-[50%] mt-2'>Weekly and Annual reviews</p>
                <p className='text-md text-center relative top-[50%] mt-2'>Reference snippets from The Journal and Day by Day</p>
            </div>

        </div>
        </>
    );

};

export default HomePage;