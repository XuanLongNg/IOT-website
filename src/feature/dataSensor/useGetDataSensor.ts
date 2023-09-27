"use client";
import { useQuery } from "@tanstack/react-query";
import DataSensorApi from "./dataSensor.service";

const useGetDataSensor = () => {
  const queryData = useQuery(["dataSensor/GET"], {
    queryFn: () => DataSensorApi.getDataSensorApi(),
    keepPreviousData: true,
  });

  return queryData;
};
export default useGetDataSensor;
