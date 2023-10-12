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
  warning,
}: {
  data: TemperatureType[] | undefined;
  isLoading: boolean;
  warning: boolean;
}) {
  // if (isLoading) return <div>Loading.....</div>;

  const { classes } = useStyles();

  const range = data ? data[data.length - 1].temperature : 0;
  const [warningClass, setWarningClass] = useState(classes.warning1);
  useEffect(() => {
    // setWarning(range > 50);
    setInterval(() => {
      setWarningClass(
        classes.warning2 == warningClass ? classes.warning1 : classes.warning2
      );
    }, 500);
  }, [warning]);
  const classNameTemperature = clsx({
    [warningClass]: warning,
    [classes["too-hot"]]: range > 49 && !warning,
    [classes.hot]: range > 24 && range < 50 && !warning,
    [classes.warn]: range > 0 && range < 25 && !warning,
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
