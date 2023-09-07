"use client";
import { useEffect, useState } from "react";
import CardInformation, {
  DataDashBoardType,
} from "@/common/utils/cardInformation";
import useStyles from "./style";
import { getTime } from "@/common/utils/getTime";
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
  const range = data ? data[data.length - 1].temperature % 101 : 0;
  const classNameTemperature = clsx({
    [classes["too-hot"]]: range > 49,
    [classes.hot]: range > 24 && range < 50,
    [classes.warn]: range > 0 && range < 25,
    // [classes.cold]: range > 9 && range < 30,
    // [classes["too-cold"]]: range < 10,
  });
  const labels: string[] = data
    ? data.slice(0, 4).map((data: any) => getTime(data.time).time)
    : [];
  const fullData = {
    labels,
    datasets: [
      {
        label: "temperature",
        data: data
          ? data.slice(0, 4).map((data: any) => data.temperature % 101)
          : [],
        borderColor: "white",
        backgroundColor: "red",
      },
    ],
  };
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
