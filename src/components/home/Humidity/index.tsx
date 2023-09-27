"use client";
import CardInformation, {
  DataDashBoardType,
} from "@/common/utils/cardInformation";
import useStyles from "./style";
import { useEffect, useState } from "react";
import clsx from "clsx";
import axios from "axios";
import { Format_HH_mm_ss, Format_YYYY_MM_DD } from "@/common/utils/getTime";
import HumidityType from "@/feature/humidity/humidity.type";

export default function Humidity({
  data,
  isLoading,
}: {
  data: HumidityType[] | undefined;
  isLoading: boolean;
}) {
  // useEffect(() => {}, [isLoading]);
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
  const range = data ? data[data.length - 1].humidity : 0;
  const classNameHumidity = clsx({
    [classes["too-wet"]]: range > 68,
    [classes.wet]: range > 32 && range < 69,
    [classes.dry]: range > -1 && range < 33,
  });
  const labels: string[] = data
    ? data
        .slice(data.length - 4, data.length)
        .map((data: HumidityType) => Format_HH_mm_ss(data.time).time)
    : [];
  const fullData = {
    labels,
    datasets: [
      {
        label: "humidity",
        data: data
          ? data
              .slice(data.length - 4, data.length)
              .map((data: HumidityType) => data.humidity)
          : [],
        borderColor: "white",
        backgroundColor: "#F7A531",
        // fill: true,
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
