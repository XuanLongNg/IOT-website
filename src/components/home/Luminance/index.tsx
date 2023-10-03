"use client";
import CardInformation, {
  DataDashBoardType,
} from "@/common/utils/cardInformation";
import useStyles from "./style";
import clsx from "clsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { Format_HH_mm_ss } from "@/common/utils/getTime";
import LuminanceType from "@/feature/luminance/luminance.type";
import TemperatureType from "@/feature/temperature/temperature.type";
export default function Luminance({
  data,
  isLoading,
}: {
  data: undefined | TemperatureType[];
  isLoading: boolean;
}) {
  // if (isLoading) return <div>Loading.....</div>;

  const { classes } = useStyles();

  // data?.sort((a: any, b: any) => {
  //   const t1: any = Format_HH_mm_ss(a.time),
  //     t2: any = Format_HH_mm_ss(b.time);
  //   if (t1.hours == t2.hours) {
  //     if (t1.minutes == t2.minutes) {
  //       return t1.seconds - t2.seconds;
  //     }
  //     return t1.minutes - t2.minutes;
  //   }
  //   return t1.hours - t2.hours;
  // });
  const range = data ? data[data.length - 1].temperature % 10001 : 0;
  const classNameLuminance = clsx({
    [classes.bright]: range > 49,
    [classes.light]: range > 24 && range < 50,
    [classes.dark]: range > -1 && range < 25,
  });
  const labels: string[] = data
    ? data
        .slice(data.length - 4, data.length)
        .map((data: TemperatureType) => Format_HH_mm_ss(data.time).time)
    : [];
  const fullData = {
    labels,
    datasets: [
      {
        label: "luminance",
        data: data
          ? data
              .slice(data.length - 4, data.length)
              .map((data: TemperatureType) => data.temperature % 10001)
          : [],
        borderColor: "white",
        backgroundColor: "#F7A531",
      },
    ],
  };
  return (
    <CardInformation
      title="Luminance"
      parameter={range}
      unit="lux"
      data={fullData}
      classes={classes}
      newClass={classNameLuminance}
    />
  );
}
