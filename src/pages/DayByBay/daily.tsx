import { NavLink, useLocation, useParams } from "react-router";
import { getDayName, getLastDayNumberOfMonth } from "../../utils/helper";

const DBDDaily = () => {
    const {month, year} = useParams();
    const location = useLocation();

    /**
     * Returns a list of days in a given month.
     * For the input January 2026 => [31, 30, 29, ..., 1]
     */
    const constructDaysList = (month: string, year: String) => {
      const lastDay = getLastDayNumberOfMonth(month ?? '', year ?? '');
      const daysList = [];
      for (let idx = lastDay; idx > 0; idx--) {
        daysList.push(idx);
      }
      return daysList;
    };

    return (
        <div className="mt-8"   >
            <p className="text-2xl pl-4">{month} {year}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7 w-[80%] mx-auto mt-4 gap-4">
                {
                    constructDaysList(month ?? '', year ?? '').map(day => {
                        return (
                            <NavLink to={`${location.pathname}/${day}`}>
                                <div className="h-20 lg:h-40 bg-red-700 cursor-pointer hover:bg-red-800">
                                    <p className="text-2xl text-center pt-2 lg:pt-12 text-white">{month?.toLocaleString()} {day.toLocaleString()}</p>
                                    <p className="text-lg text-center mt-2 text-white">{getDayName(year ?? '', month ?? '', day)}</p>
                                    <p className="text-lg text-center mt-2 text-white">{year}</p>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DBDDaily;