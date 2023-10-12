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
  warning,
}: {
  data: undefined | LuminanceType[];
  isLoading: boolean;
  warning: boolean;
}) {
  // if (isLoading) return <div>Loading.....</div>;

  const { classes } = useStyles();
  const range = data ? data[data.length - 1].luminance : 0;

  const [warningClass, setWarningClass] = useState(classes.warning1);
  useEffect(() => {
    setInterval(() => {
      setWarningClass(
        classes.warning2 == warningClass ? classes.warning1 : classes.warning2
      );
    }, 500);
  }, [warning]);
  const classNameLuminance = clsx({
    [warningClass]: warning,
    [classes.bright]: !warning && range > 49,
    [classes.light]: !warning && range > 24 && range < 50,
    [classes.dark]: !warning && range > -1 && range < 25,
  });
  const labels: string[] = data
    ? data
        .slice(data.length - 4, data.length)
        .map((data: LuminanceType) => Format_HH_mm_ss(data.time).time)
    : [];
  const fullData = {
    labels,
    datasets: [
      {
        label: "luminance",
        data: data
          ? data
              .slice(data.length - 4, data.length)
              .map((data: LuminanceType) => data.luminance)
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
