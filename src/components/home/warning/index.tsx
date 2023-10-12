import { useEffect, useRef, useState } from "react";
import useStyles from "./style";
import Image from "next/image";
import clsx from "clsx";
import usePostStateLed from "@/feature/led/usePostStateLed";
import LedApi from "@/feature/led/led.service";
import socket from "@/common/services/websocket.service";
import axios from "axios";

const LedOff = () => {
  return (
    <Image
      src="/images/light-off.png"
      width={(600 / 800) * 100}
      height={100}
      alt="light off"
      className="light-off"
    />
  );
};
const LedOn = () => {
  return (
    <Image
      src="/images/light-on.png"
      width={(600 / 800) * 100}
      height={100}
      alt="light on"
      className="light-on"
    />
  );
};

export default function Warning({ warning }: { warning: boolean }) {
  const { classes } = useStyles();
  const { data, isLoading } = usePostStateLed("0", 1);
  let countRef = useRef<number>(0);
  useEffect(() => {
    axios.post("http://localhost:4000/api/warningLed", {
      message: warning ? "1" : "0",
    });
  }, [warning]);

  const classNameBtn = clsx(
    "d-flex flex-column justify-content-center align-items-center",
    classes.root
  );
  const renderLed = () => {
    setInterval(() => {
      const render = countRef.current % 2 == 0 ? <LedOn /> : <LedOff />;
      countRef.current++;
      return render;
    });
  };
  return (
    <div className={classNameBtn}>
      <div className="content">
        {!warning ? "normal" : <span style={{ color: "red" }}>warning</span>}
      </div>
      {!warning && <LedOff />}
      {warning && <LedOn />}
    </div>
  );
}
