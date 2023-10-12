"use client";
import CardInformation, {
  DataDashBoardType,
} from "@/common/utils/cardInformation";
import useStyles from "./style";
import { useEffect, useState } from "react";
import clsx from "clsx";
import axios from "axios";
import { Format_HH_mm_ss, Format_YYYY_MM_DD } from "@/common/utils/getTime";
import DustType from "@/feature/dust/dust.type";

export default function Dust({
  data,
  isLoading,
  warning,
  setWarning,
}: {
  data: DustType[] | undefined;
  isLoading: boolean;
  warning: boolean;
  setWarning: Function;
}) {
  const { classes } = useStyles();
  const range = data ? data[data.length - 1].dust : 0;
  const [warningClass, setWarningClass] = useState(classes.warning1);
  useEffect(() => {
    setWarning(range > 50);
    setInterval(() => {
      setWarningClass(
        classes.warning2 == warningClass ? classes.warning1 : classes.warning2
      );
    }, 500);
  }, [range]);
  const classNameDust = clsx({
    // [classes.dust]: range > 50,
    [warningClass]: warning,
    [classes.clear]: !warning && range > -1 && range < 51,
  });
  const labels: string[] = data
    ? data
        .slice(data.length - 4, data.length)
        .map((data: DustType) => Format_HH_mm_ss(data.time).time)
    : [];
  const fullData = {
    labels,
    datasets: [
      {
        label: "humidity",
        data: data
          ? data
              .slice(data.length - 4, data.length)
              .map((data: DustType) => data.dust)
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
      title="Dust"
      parameter={range}
      unit="%"
      data={fullData}
      classes={classes}
      newClass={classNameDust}
    />
  );
}
