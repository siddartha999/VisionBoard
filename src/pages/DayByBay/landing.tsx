import { NavLink, useLocation } from "react-router";

export const LandingPage = () => {
    const location = useLocation();
    /**
     * Returns a list of years in the chronologically reverse order.
     */
    const constructYearsList = (): string[] => {
        return ['2026', '2025'];
    };

    return (
        <div id="DayByDay_Landing" className="mt-8">
            <div id="years_wrapper" className="flex gap-4 lg:gap-8 flex-wrap w-[90%] mx-auto">
                {
                    constructYearsList().map(year => {
                        return (
                            <NavLink key={year} to={`${location.pathname}/${year}`}>
                                <div className="h-60 lg:h-80 bg-orange-700 cursor-pointer hover:bg-orange-800">
                                    <p className="text-2xl text-center pt-24 lg:pt-30 text-white px-24 lg:px-40">{year}</p>
                                    <p className="text-xl text-center mt-2 text-white">x days logged</p>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default LandingPage;