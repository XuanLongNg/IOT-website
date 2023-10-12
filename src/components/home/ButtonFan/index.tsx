import { Button, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import useStyles from "./style";
import clsx from "clsx";
import Image from "next/image";
import usePostStateLed from "@/feature/led/usePostStateLed";
import LedApi from "@/feature/led/led.service";
import socket from "@/common/services/websocket.service";

export default function ButtonFan() {
  const [stateBtn, setStateBtn] = useState<boolean>(false);
  const { classes } = useStyles();
  const { data, isLoading } = usePostStateLed("0", 2);
  useEffect(() => {
    socket.on("led2", (message: string) => {
      // console.log("led2: ", message);
      setStateBtn(message == "1" ? true : false);
    });
  }, []);
  const handleOnclick = () => {
    const message = !stateBtn ? "1" : "0";
    LedApi.postStateLed(message, 2);
    setStateBtn(!stateBtn);
  };
  const classNameBtn = clsx(
    "d-flex flex-column justify-content-center align-items-center",
    classes.root
  );
  return (
    <div className={classNameBtn}>
      <div className="content">Fan</div>
      <Image
        src="/images/fan1.png"
        alt="fan"
        width={100}
        height={100}
        className={stateBtn === true ? "fan spin" : "fan"}
      />
      <Switch
        // className="btn-action d-flex justify-content-center align-items-end"
        checked={stateBtn}
        onClick={handleOnclick}
      />
    </div>
  );
}
