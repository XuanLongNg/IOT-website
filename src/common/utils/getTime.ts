import { format, getHours, getMinutes, getSeconds } from "date-fns";

export const getTime = (date: string) => {
  const newDate = new Date(date);
  const time = format(newDate, "HH:mm:ss");
  const hours = getHours(newDate),
    minutes = getMinutes(newDate),
    seconds = getSeconds(newDate);
  return {
    time,
    hours,
    minutes,
    seconds,
  };
};
