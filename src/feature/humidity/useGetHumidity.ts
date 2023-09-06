"use client";
import { useQuery } from "@tanstack/react-query";
import HumidityApi from "./humidity.service";

const useGetHumidity = () => {
  const queryData = useQuery(["humidity/GET"], {
    queryFn: () => HumidityApi.getHumidity(),
    keepPreviousData: true,
  });

  return queryData;
};
export default useGetHumidity;
