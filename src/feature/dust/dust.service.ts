"use client";

import HttpService from "@/common/services/http.service";
import DustType from "./dust.type";
import { Format_YYYY_MM_DD } from "@/common/utils/getTime";

class DustApiServices extends HttpService {
  constructor() {
    super({
      baseURL: "http://localhost:4000",
    });
  }
  getDust() {
    return this.get<DustType[]>(
      `/api/getDustByMonth?time=${
        Format_YYYY_MM_DD(new Date().toString()).time
      }`
    );
  }
}

const DustApi = new DustApiServices();

export default DustApi;
