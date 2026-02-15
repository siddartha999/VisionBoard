import { expect, test } from "vitest";
import { getDayName } from "../../utils/helper";
import { DAY_NAME, MONTH } from "../../utils/Constants";

test('Comprehensive getDayName() test', () => {
    expect(getDayName("2026", MONTH.AUGUST, 9)).toBe(DAY_NAME.SUNDAY);
    expect(getDayName("2026", MONTH.DECEMBER, 10)).toBe(DAY_NAME.THURSDAY);
    expect(getDayName("2026", MONTH.DECEMBER, 31)).toBe(DAY_NAME.THURSDAY);
    expect(getDayName("2027", MONTH.JANUARY, 1)).toBe(DAY_NAME.FRIDAY);
    expect(getDayName("2027", MONTH.JANUARY, 12)).toBe(DAY_NAME.TUESDAY);
    expect(getDayName("2027", MONTH.AUGUST, 9)).toBe(DAY_NAME.MONDAY);
    expect(getDayName("2027", MONTH.DECEMBER, 10)).toBe(DAY_NAME.FRIDAY);
    expect(getDayName("2027", MONTH.DECEMBER, 31)).toBe(DAY_NAME.FRIDAY);
    expect(getDayName("2028", MONTH.JANUARY, 1)).toBe(DAY_NAME.SATURDAY);
    expect(getDayName("2028", MONTH.JANUARY, 12)).toBe(DAY_NAME.WEDNESDAY);
    expect(getDayName("2028", MONTH.FEBRUARY, 29)).toBe(DAY_NAME.TUESDAY);
    expect(getDayName("2028", MONTH.AUGUST, 9)).toBe(DAY_NAME.WEDNESDAY);
    expect(getDayName("2028", MONTH.DECEMBER, 10)).toBe(DAY_NAME.SUNDAY);
    expect(getDayName("2028", MONTH.DECEMBER, 31)).toBe(DAY_NAME.SUNDAY);
    expect(getDayName("2029", MONTH.JANUARY, 1)).toBe(DAY_NAME.MONDAY);
    expect(getDayName("2029", MONTH.JANUARY, 12)).toBe(DAY_NAME.FRIDAY);
    expect(getDayName("2029", MONTH.AUGUST, 9)).toBe(DAY_NAME.THURSDAY);
    expect(getDayName("2029", MONTH.DECEMBER, 10)).toBe(DAY_NAME.MONDAY);
    expect(getDayName("2048", MONTH.JANUARY, 12)).toBe(DAY_NAME.SUNDAY);
    expect(getDayName("2048", MONTH.AUGUST, 9)).toBe(DAY_NAME.SUNDAY);
    expect(getDayName("2048", MONTH.DECEMBER, 10)).toBe(DAY_NAME.THURSDAY);
});