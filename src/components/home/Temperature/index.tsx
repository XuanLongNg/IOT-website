"use client";
import { useEffect, useState } from "react";
import CardInformation, {
  DataDashBoardType,
} from "@/common/utils/cardInformation";
import useStyles from "./style";
import axios from "axios";
import { getTime } from "@/common/utils/getTime";
import clsx from "clsx";
import TemperatureType from "@/feature/temperature/temperature.type";

export default function Temperature({
  data,
  isLoading,
}: {
  data: TemperatureType[];
  isLoading: boolean;
}) {
  const { classes } = useStyles();
  const [dataConvert, setDataConvert] = useState();
  const [range, setRange] = useState(0);
  const classNameTemperature = clsx({
    [classes["too-hot"]]: range > 49,
    [classes.hot]: range > 24 && range < 50,
    [classes.warn]: range > 0 && range < 25,
    // [classes.cold]: range > 9 && range < 30,
    // [classes["too-cold"]]: range < 10,
  });
  const labels: string[] = data.map((data: TemperatureType, index: number) => {
    data.temperature = data.temperature % 111;
    data.time = getTime(data.time).time;
    return data.time;
  });
  // data.map((data: any, index: number) => {
  //   data.temperature = data.temperature % 111;
  //   data.time = getTime(data.time).time;
  //   labels[index] = data.time;
  //   setRange(data.temperature);
  // });
  const fullData: DataDashBoardType = {
    labels,
    datasets: [
      {
        label: "temperature",
        data: data.map((data: any) => data.temperature),
        borderColor: "white",
        backgroundColor: "red",
      },
    ],
  };
  // const [data, setData] = useState<any>();
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getTemperature: any = async () => {
      try {
        const url = "https://64e33753bac46e480e786762.mockapi.io/temperature";
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
          data.temperature = data.temperature % 111;
          data.time = getTime(data.time).time;
          labels[index] = data.time;
          setRange(data.temperature);
        });
        console.log(range);

        setDataApi(response.data);
        const fullData = {
          labels,
          datasets: [
            {
              label: "temperature",
              data: response.data.map((data: any) => data.temperature),
              borderColor: "white",
              backgroundColor: "red",
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
  if (isLoading) return <div>Loading.....</div>;

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
