"use client";
import { useEffect, useState } from "react";
import CardInformation from "@/common/utils/cardInformation";
import useStyles from "./style";
import axios from "axios";
import { getTime } from "@/common/utils/getTime";
// const labels = ["January", "February", "March", "April", "May", "June", "July"];
// const data = {
//   labels,
//   datasets: [
//     {
//       label: "temperature",
//       data: labels.map(() => Math.floor(Math.random() * 1110) / 10),
//       borderColor: "white",
//       backgroundColor: "red",
//     },
//   ],
// };
export default function Temperature() {
  const { classes } = useStyles();
  const [dataApi, setDataApi] = useState([]);
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const [data, setData] = useState<any>({
    labels,
    dataset: [
      {
        label: "temperature",
        data: labels.map(() => Math.floor(Math.random() * 1110) / 10),
        borderColor: "white",
        backgroundColor: "red",
      },
    ],
  });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const getTemperature: any = async () => {
      try {
        const url = "https://64e33753bac46e480e786762.mockapi.io/temperature";
        const response = await axios.get(url);
        const labels: any = [];
        const dataset = [];
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
          data.number = data.number % 111;
          data.time = getTime(data.time).time;
          labels[index] = data.time;
        });
        setDataApi(response.data);
        const fullData = {
          labels,
          datasets: [
            {
              label: "temperature",
              data: response.data.map((data: any) => data.number),
              borderColor: "white",
              backgroundColor: "red",
            },
          ],
        };
        // console.log(fullData);
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
      parameter="25"
      unit="C"
      data={data}
      classes={classes}
    />
  );
}
