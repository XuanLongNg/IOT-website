"use client";

import HttpService from "@/common/services/http.service";
import LedType from "./led.type";
import { Format_YYYY_MM_DD } from "@/common/utils/getTime";

class LedApiServices extends HttpService {
  constructor() {
    super({
      baseURL: "http://localhost:4000",
    });
  }
  postStateLed(message: string, number: number) {
    const data = {
      number: number,
      message: message,
    };
    return this.post<LedType[]>(`/api/control_led`, data);
  }
}

const LedApi = new LedApiServices();

export default LedApi;
