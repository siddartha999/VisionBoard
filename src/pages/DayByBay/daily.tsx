import { useParams } from "react-router";
import { Months } from "../../utils/Constants";

const DBDDaily = () => {
    const {month, year} = useParams();

    const getLastDayOfMonth = (month: string, year: String): number => {
        switch(month) {
            case Months.JANUARY:
            case Months.MARCH:
            case Months.MAY:
            case Months.JULY:
            case Months.AUGUST:
            case Months.OCTOBER:
            case Months.DECEMBER:
                return 31;
            case Months.APRIL:
            case Months.JUNE:
            case Months.SEPTEMBER:
            case Months.NOVEMBER:
                return 30;
            case Months.FEBRUARY:
                return (Number(year) % 4) === 0 ? 29 : 28;
            default:
                return 30;
        }
    }

    const constructDaysList = (month: string, year: String) => {
      const lastDay = getLastDayOfMonth(month ?? '', year ?? '');
      const days = [];
      for (let idx = lastDay; idx > 0; idx--) {
        days.push(idx);
      }
      return days;
    };

    return (
        <div className="mt-8">
            <p className="text-2xl pl-4">{month} {year}</p>
            <div className="grid grid-cols-1 w-[80%] mx-auto mt-4">
                {
                    constructDaysList(month ?? '', year ?? '').map(day => {
                        return (
                            <p className="text-center text-2xl">{day.toLocaleString()}</p>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DBDDaily;