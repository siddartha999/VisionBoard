import { NavLink, useLocation } from "react-router";


const DBDHome = () => {

    const location = useLocation();

    return (
        <div id="DayByDay-home" className="h-[100vh] flex">
            <NavLink to={`${location.pathname}/2026`}>
                <div className='w-[15rem] h-[15rem] bg-gray-800 m-4 cursor-pointer'>
                    <p className='text-2xl text-center relative top-[50%]'>2026</p>
                    <p className='text-md text-center relative top-[50%] mt-2'>5 days logged</p>
                </div>
            </NavLink>
            <div className='w-[15rem] h-[15rem] bg-gray-800 m-4 cursor-pointer'>
                <p className='text-2xl text-center relative top-[50%]'>2025</p>
                <p className='text-md text-center relative top-[50%] mt-2'>300 days logged</p>
            </div>
        </div>
    );
};

export default DBDHome;