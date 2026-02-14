import { DAY_NAME, DAY_NAMES_IN_ORDER, DAYS_IN_YEAR_PER_MONTH_RUNNING_COUNT, MONTH, MONTHS_IN_ORDER } from "./Constants";

/**
 * Returns the last day number of the given month.
 */
export const getLastDayNumberOfMonth = (month: string, year: String): number => {
    switch(month) {
        case MONTH.JANUARY:
        case MONTH.MARCH:
        case MONTH.MAY:
        case MONTH.JULY:
        case MONTH.AUGUST:
        case MONTH.OCTOBER:
        case MONTH.DECEMBER:
            return 31;
        case MONTH.APRIL:
        case MONTH.JUNE:
        case MONTH.SEPTEMBER:
        case MONTH.NOVEMBER:
            return 30;
        case MONTH.FEBRUARY:
            return (Number(year) % 4) === 0 ? 29 : 28;
        default:
            return 30;
    }
};

/**
 * Returns the day name for the given year, month, and date
 * 2012 Jan 1 is chosen as the origin for calculations for two reasons
 * a) It is a Sunday b) This app isn't expected to travel back beyond 2012.
 */
export const getDayName = (targetYear: string, month: string, date: number): DAY_NAME => {
    const targetYearNum = Number(targetYear);
    const originYear = 2012; // 2012 Jan 1, Sunday
    const numOfLeapYears = Math.floor((targetYearNum - originYear) / 4);
    const monthIndex = MONTHS_IN_ORDER.findIndex(m => month === m);
    let days = (monthIndex === 0 ? 0 : DAYS_IN_YEAR_PER_MONTH_RUNNING_COUNT[monthIndex - 1] ) + date + numOfLeapYears;
    if ((targetYearNum % 4 === 0) && monthIndex > 1) {
        days += 1;
    }
    days += (366 % 7) * ((targetYearNum - originYear) % 7);
    return DAY_NAMES_IN_ORDER[days % 7];
};