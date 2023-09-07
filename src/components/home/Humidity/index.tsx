"use client";
import CardInformation, {
  DataDashBoardType,
} from "@/common/utils/cardInformation";
import useStyles from "./style";
import { useEffect, useState } from "react";
import clsx from "clsx";
import axios from "axios";
import { getTime } from "@/common/utils/getTime";
import HumidityType from "@/feature/humidity/humidity.type";

// const labels = ["January", "February", "March", "April", "May", "June", "July"];
// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "humidity",
//       data: labels.map(() => Math.floor(Math.random() * 101)),
//       borderColor: "white",
//       backgroundColor: "#00ADD7",
//     },
//   ],
// };
export default function Humidity({
  data,
  isLoading,
}: {
  data: HumidityType[] | undefined;
  isLoading: boolean;
}) {
  // useEffect(() => {}, [isLoading]);
  const { classes } = useStyles();

  data?.sort((a: any, b: any) => {
    const t1: any = getTime(a.time),
      t2: any = getTime(b.time);
    if (t1.hours == t2.hours) {
      if (t1.minutes == t2.minutes) {
        return t1.seconds - t2.seconds;
      }
      return t1.minutes - t2.minutes;
    }
    return t1.hours - t2.hours;
  });
  const range = data ? data[data.length - 1].humidity % 101 : 0;
  const classNameHumidity = clsx({
    [classes["too-wet"]]: range > 68,
    [classes.wet]: range > 32 && range < 69,
    [classes.dry]: range > -1 && range < 33,
  });
  const labels: string[] = data
    ? data.slice(0, 4).map((data: HumidityType) => getTime(data.time).time)
    : [];
  const fullData = {
    labels,
    datasets: [
      {
        label: "humidity",
        data: data
          ? data.slice(0, 4).map((data: HumidityType) => data.humidity % 101)
          : [],
        borderColor: "white",
        backgroundColor: "#F7A531",
        fill: true,
      },
    ],
  };
  // console.log(fullData);
  // if (isLoading) return <div>Loading....</div>;

  return (
    <CardInformation
      title="Humidity"
      parameter={range}
      unit="%"
      data={fullData}
      classes={classes}
      newClass={classNameHumidity}
    />
  );
}
