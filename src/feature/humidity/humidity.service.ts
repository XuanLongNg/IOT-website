"use client";

import HttpService from "@/common/services/http.service";
import HumidityType from "./humidity.type";

class HumidityApiServices extends HttpService {
  constructor() {
    super({
      baseURL: "https://64f8921a824680fd217fc8d1.mockapi.io/",
    });
  }
  getHumidity() {
    return this.get<HumidityType[]>("/humidity");
  }
}

const HumidityApi = new HumidityApiServices();

export default HumidityApi;
