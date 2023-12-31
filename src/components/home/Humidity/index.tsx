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
  warning,
}: {
  data: HumidityType[] | undefined;
  isLoading: boolean;
  warning: boolean;
}) {
  const { classes } = useStyles();

  const range = data ? data[data.length - 1].humidity : 0;
  const [warningClass, setWarningClass] = useState(classes.warning1);
  useEffect(() => {
    // setWarning(range > 50);
    setInterval(() => {
      setWarningClass(
        classes.warning2 == warningClass ? classes.warning1 : classes.warning2
      );
    }, 500);
  }, [warning]);
  const classNameHumidity = clsx({
    [warningClass]: warning,
    [classes["too-wet"]]: range > 68 && !warning,
    [classes.wet]: range > 32 && range < 69 && !warning,
    [classes.dry]: range > -1 && range < 33 && !warning,
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
