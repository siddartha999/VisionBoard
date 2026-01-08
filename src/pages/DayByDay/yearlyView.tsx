import { NavLink, useLocation, useParams } from "react-router";

const DBDYearlyView = () => {
    const { year } = useParams();
    const location = useLocation();
    return (
        <div>
            <p className="text-2xl m-4">
                You're in the year {year}
            </p>

            <div className="flex">
                <NavLink to={`${location.pathname}/jan_7`}>
                    <div className='w-[15rem] h-[15rem] bg-gray-800 m-4 cursor-pointer'>
                        <p className='text-2xl text-center relative top-[50%]'>Today</p>
                    </div>
                </NavLink>

                <div className='w-[15rem] h-[15rem] bg-lime-700 m-4 cursor-pointer'>
                    <p className='text-2xl text-center relative top-[50%]'>Jan 6</p>
                    <p className='text-md text-center relative top-[50%] mt-2'>View or update log</p>
                </div>

                <div className='w-[15rem] h-[15rem] bg-orange-800 m-4 cursor-pointer'>
                    <p className='text-2xl text-center relative top-[50%]'>Jan 5</p>
                    <p className='text-md text-center relative top-[50%] mt-2'>Record the log!</p>
                </div>
            </div>
        </div>
    );
};

export default DBDYearlyView;