"use client";
import { useQuery } from "@tanstack/react-query";
import LuminanceApi from "./luminance.service";

const useGetLuminance = () => {
  const queryData = useQuery(["luminance/GET"], {
    queryFn: () => LuminanceApi.getLuminance(),
    keepPreviousData: true,
  });

  return queryData;
};
export default useGetLuminance;
