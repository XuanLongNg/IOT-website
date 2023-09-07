"use client";
import CardInformation, {
  DataDashBoardType,
} from "@/common/utils/cardInformation";
import useStyles from "./style";
import clsx from "clsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { getTime } from "@/common/utils/getTime";
import LuminanceType from "@/feature/luminance/luminance.type";
export default function Luminance({
  data,
  isLoading,
}: {
  data: LuminanceType[] | undefined;
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
  const range = data ? data[data.length - 1].luminance % 10001 : 0;
  const classNameLuminance = clsx({
    [classes.bright]: range > 49,
    [classes.light]: range > 24 && range < 50,
    [classes.dark]: range > -1 && range < 25,
  });
  const labels: string[] = data
    ? data.slice(0, 4).map((data: LuminanceType) => getTime(data.time).time)
    : [];
  const fullData = {
    labels,
    datasets: [
      {
        label: "luminance",
        data: data
          ? data.map((data: LuminanceType) => data.luminance % 10001)
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
