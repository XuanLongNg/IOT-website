"use client";
import { useEffect, useState } from "react";
import CardInformation, {
  DataDashBoardType,
} from "@/common/utils/cardInformation";
import useStyles from "./style";
import { Format_HH_mm_ss } from "@/common/utils/getTime";
import clsx from "clsx";
import TemperatureType from "@/feature/temperature/temperature.type";

export default function Temperature({
  data,
  isLoading,
}: {
  data: TemperatureType[] | undefined;
  isLoading: boolean;
}) {
  // if (isLoading) return <div>Loading.....</div>;

  const { classes } = useStyles();
  // data?.sort((a: any, b: any) => {
  //   const t1: any = Format_HH_mm_ss(a.time),
  //     t2: any = Format_HH_mm_ss(b.time);
  //   if (t1.hours == t2.hours) {
  //     if (t1.minutes == t2.minutes) {
  //       return t2.seconds - t1.seconds;
  //     }
  //     return t2.minutes - t1.minutes;
  //   }
  //   return t2.hours - t1.hours;
  // });
  const range = data ? data[data.length - 1].temperature : 0;
  const classNameTemperature = clsx({
    [classes["too-hot"]]: range > 49,
    [classes.hot]: range > 24 && range < 50,
    [classes.warn]: range > 0 && range < 25,
    // [classes.cold]: range > 9 && range < 30,
    // [classes["too-cold"]]: range < 10,
  });
  const labels: string[] = data
    ? data
        .slice(data.length - 4, data.length)
        .map((data: any) => Format_HH_mm_ss(data.time).time)
    : [];
  const fullData = {
    labels,
    datasets: [
      {
        label: "temperature",
        data: data
          ? data
              .slice(data.length - 4, data.length)
              .map((data: any) => data.temperature)
          : [],
        borderColor: "white",
        backgroundColor: "red",
      },
    ],
  };
  // console.log(data);

  return (
    <CardInformation
      title="Temperature"
      parameter={range}
      unit="C"
      data={fullData}
      classes={classes}
      newClass={classNameTemperature}
    />
  );
}
