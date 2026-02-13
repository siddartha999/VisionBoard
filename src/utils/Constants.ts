export enum MONTH {
    JANUARY = "January",
    FEBRUARY = "February",
    MARCH = "March",
    APRIL = "April",
    MAY = "May",
    JUNE = "June",
    JULY = "July",
    AUGUST = "August",
    SEPTEMBER = "September",
    OCTOBER = "October",
    NOVEMBER = "November",
    DECEMBER = "December"
}

export enum DAY_NAME {
    SUNDAY = "Sunday",
    MONDAY = "Monday",
    TUESDAY = "Tuesday",
    WEDNESDAY = "Wednesday",
    THURSDAY = "Thursday",
    FRIDAY = "Friday",
    SATURDAY = "Saturday",
}

export const MONTHS_IN_ORDER = [MONTH.JANUARY, MONTH.FEBRUARY, MONTH.MARCH, MONTH.APRIL, MONTH.MAY, MONTH.JUNE, MONTH.JULY, MONTH.AUGUST, MONTH.SEPTEMBER,
        MONTH.OCTOBER, MONTH.NOVEMBER, MONTH.DECEMBER];

export const DAY_NAMES_IN_ORDER = [DAY_NAME.SUNDAY, DAY_NAME.MONDAY, DAY_NAME.TUESDAY, DAY_NAME.WEDNESDAY, DAY_NAME.THURSDAY, DAY_NAME.FRIDAY, DAY_NAME.SATURDAY];

// Non-leap year
export const DAYS_IN_YEAR_PER_MONTH_RUNNING_COUNT = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];