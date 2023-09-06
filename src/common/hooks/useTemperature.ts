import axios from "axios";
import { useEffect, useState } from "react";
import { getTime } from "../utils/getTime";

const useTemperature = () => {
  const [dataTemperature, setDataTemperature] = useState([
    {
      id: 1,
      temperature: 0,
      time: "00:00:00",
    },
  ]);
  //   const reducerTemperature = (state = initialTemperature, action:any) => {
  //     switch (action.type) {
  //       case "COMPLETE":
  //         return state.map((todo) => {
  //           if (todo.id === action.id) {
  //             return { ...todo, complete: !todo.complete };
  //           } else {
  //             return todo;
  //           }
  //         });
  //       default:
  //         return state;
  //     }
  //   };
  useEffect(() => {
    const getTemperature: any = async () => {
      try {
        const url = "https://64e33753bac46e480e786762.mockapi.io/temperature";
        const response = await axios.get(url);
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
        const initialTemperature = [...dataTemperature];
        response.data.map((data: any, index: number) => {
          data.number = data.number % 111;
          initialTemperature.push({data})
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
        setData(fullData);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
  });
};
