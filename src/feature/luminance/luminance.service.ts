"use client";

import HttpService from "@/common/services/http.service";
import LuminanceType from "./luminance.type";
import { Format_YYYY_MM_DD } from "@/common/utils/getTime";

class LuminanceApiServices extends HttpService {
  constructor() {
    super({
      baseURL: "http://localhost:4000",
    });
  }
  getLuminance() {
    return this.get<LuminanceType[]>(
      `/api/getLuminanceByMonth?time=${
        Format_YYYY_MM_DD(new Date().toString()).time
      }`
    );
  }
}

const LuminanceApi = new LuminanceApiServices();

export default LuminanceApi;
