import { format, getHours, getMinutes, getSeconds } from "date-fns";

export const getTime = (date: string) => {
  console.log("Old date: ", date);
  const newDate = new Date(date);
  console.log("New date: ", newDate);

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
