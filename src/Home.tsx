import { NavLink } from "react-router";

const Home = () => {
    return (
        <div id="Home" className="mt-8">
            <div id="home_components" className="grid grid-cols-1 lg:grid-cols-3 w-[80%] mx-auto gap-4 lg:gap-8">
                <div id="journal" className="h-40 lg:h-80 bg-blue-700 cursor-pointer hover:bg-blue-800">
                    <p className="text-2xl text-center pt-15 lg:pt-30">The Journal</p>
                    <p className="text-lg text-center mt-2">Your hub to express longer chain thoughts</p>
                </div>
                <NavLink to="/dbd">
                    <div id="daybyday" className="h-40 lg:h-80 bg-orange-700 cursor-pointer hover:bg-orange-800">
                        <p className="text-2xl text-center pt-15 lg:pt-30 text-white">Day by Day</p>
                        <p className="text-lg text-center mt-2 text-white">Log your daily activity</p>
                    </div>
                </NavLink>
                <div id="reviews" className="h-40 lg:h-80 bg-green-700 cursor-pointer hover:bg-green-800">
                    <p className="text-2xl text-center pt-15 lg:pt-30">Reviews</p>
                    <p className="text-lg text-center  mt-2">Weekly and Annual reviews</p>
                </div>
            </div>
        </div>
    );
};

export default Home;