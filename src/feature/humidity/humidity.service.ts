"use client";

import HttpService from "@/common/services/http.service";
import HumidityType from "./humidity.type";
import { Format_YYYY_MM_DD } from "@/common/utils/getTime";

class HumidityApiServices extends HttpService {
  constructor() {
    super({
      baseURL: "http://localhost:4000",
    });
  }
  getHumidity() {
    return this.get<HumidityType[]>(
      `/api/getHumidityByMonth?time=${
        Format_YYYY_MM_DD(new Date().toString()).time
      }`
    );
  }
}

const HumidityApi = new HumidityApiServices();

export default HumidityApi;
