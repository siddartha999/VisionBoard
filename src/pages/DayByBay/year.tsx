import { NavLink, useLocation, useParams } from "react-router";
import { Months } from "../../utils/Constants";

const DBDYear = () => {
    const {year} = useParams();
    const location = useLocation();

    return (
        <div id="DayByDay_year" className="mt-8">
            <div className="pl-4 text-2xl">
                <p>{year}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-[80%] mx-auto gap-4 lg:gap-8 mt-4">
                {
                    Object.values(Months).reverse().map(month => {
                        return (
                            <NavLink to={`${location.pathname}/${month}`}>
                                <div className="h-20 lg:h-40 bg-red-700 cursor-pointer hover:bg-red-800">
                                    <p className="text-2xl text-center pt-2 lg:pt-12 text-white">{month} {year}</p>
                                    <p className="text-lg text-center mt-2 text-white">x days logged</p>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DBDYear;