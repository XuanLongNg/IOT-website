"use client";
import { useQuery } from "@tanstack/react-query";
import DustApi from "./dust.service";

const useGetDust = () => {
  const queryData = useQuery(["dust/GET"], {
    queryFn: () => DustApi.getDust(),
    keepPreviousData: true,
  });

  return queryData;
};
export default useGetDust;
