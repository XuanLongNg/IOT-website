"use client";
import CardInformation from "@/common/utils/cardInformation";
import useStyles from "./style";
import clsx from "clsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { getTime } from "@/common/utils/getTime";
// const labels = ["January", "February", "March", "April", "May", "June", "July"];
// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "luminance",
//       data: labels.map(() => Math.random() * 101),
//       borderColor: "white",
//       backgroundColor: "#F7A531",
//     },
//   ],
// };
export default function Luminance() {
  const { classes } = useStyles();
  const [range, setRange] = useState(0);
  const classNameLuminance = clsx({
    [classes.bright]: range > 49,
    [classes.light]: range > 24 && range < 50,
    [classes.dark]: range > -1 && range < 25,
  });
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getTemperature: any = async () => {
      try {
        const url = "https://64e33753bac46e480e786762.mockapi.io/luminance";
        const response = await axios.get(url);
        const labels: any = [];
        response.data = response.data.sort((a: any, b: any) => {
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
        response.data.map((data: any, index: number) => {
          data.luminance = data.luminance % 111;
          data.time = getTime(data.time).time;
          labels[index] = data.time;
          setRange(data.luminance);
        });
        const fullData = {
          labels,
          datasets: [
            {
              label: "luminance",
              data: response.data.map((data: any) => data.luminance),
              borderColor: "white",
              backgroundColor: "#F7A531",
            },
          ],
        };
        setData(fullData);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
    getTemperature();
    setIsLoading(false);
  }, []);
  return (
    <CardInformation
      title="Luminance"
      parameter={range}
      unit="lux"
      data={data}
      classes={classes}
      newClass={classNameLuminance}
    />
  );
}
