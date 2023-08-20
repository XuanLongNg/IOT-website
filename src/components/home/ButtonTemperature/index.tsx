import { Button } from "@mui/material";
import { useState } from "react";
import useStyles from "./style";
import clsx from "clsx";

export default function Temperature() {
  const [stateBtn, setStateBtn] = useState(false);
  const { classes } = useStyles();
  const handleOnclick = () => {
    setStateBtn(stateBtn ? false : true);
  };
  const classNameBtn = clsx(
    "d-flex flex-column justify-content-center align-items-center",
    classes.root
  );
  return (
    <div className={classNameBtn}>
      <div className="content">Temperature</div>
      <Button
        className="btn-action d-flex justify-content-center align-items-end"
        variant="contained"
        onClick={handleOnclick}
      >
        {stateBtn ? "Turn off" : "Turn on"}
      </Button>
    </div>
  );
}
