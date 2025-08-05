import { toZonedTime, format } from 'date-fns-tz';

/**
 * Convert a UTC ISO date string to a specific timezone
 */
export const formatToTimezone = (
  date: string | Date,
  timeZone: string,
  dateFormat: string = "yyyy-MM-dd HH:mm:ss zzz"
) => {
  const zonedDate = toZonedTime(date, timeZone);
  return format(zonedDate, dateFormat, { timeZone });
};
