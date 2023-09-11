import Link from "next/link";
import useStyles from "./style";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
const HEIGHT_SCROLL = 50;
const HeaderLayout = () => {
  const { classes } = useStyles();
  // const { classesDrawer} = StyleDrawer();
  const [show, setShow] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > HEIGHT_SCROLL) {
        setHasScrolled(true);
      } else setHasScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);
  const classNameHeader = clsx("d-flex", classes["style-header"], {
    [classes["is-scroller"]]: hasScrolled,
  });
  return (
    <div className={classNameHeader}>
      <ul className="d-flex">
        <li onClick={handleOpen}>
          <DensitySmallIcon />
        </li>
        <li>
          <Link href={"/"}>Dashboard</Link>
        </li>
      </ul>
      <Link href={"/profile"}>
        <Avatar
          alt="avatar"
          src="images/Nobita.jpg"
          sx={{ width: 50, height: 50 }}
          className="avatar"
        />
      </Link>

      <Drawer
        className={classes["style-drawer"]}
        anchor={"left"}
        open={show}
        onClose={handleClose}
      >
        <div className="drawer-title d-flex justify-content-between align-items-center">
          <h2>Feature</h2>
          <FormatIndentDecreaseIcon onClick={handleClose} />
        </div>
        <div>
          <ul>
            <Link href={"/"}>
              <li
                onClick={() => {
                  setTimeout(handleClose, 0);
                }}
              >
                Dashboard
              </li>
            </Link>
            <Link href={"/profile"}>
              <li
                onClick={() => {
                  setTimeout(handleClose, 0);
                }}
              >
                Profile
              </li>
            </Link>
            <Link href={"/sensor-data"}>
              <li
                onClick={() => {
                  setTimeout(handleClose, 0);
                }}
              >
                Sensor data
              </li>
            </Link>
            <Link href={"/action"}>
              <li
                onClick={() => {
                  setTimeout(handleClose, 0);
                }}
              >
                Action
              </li>
            </Link>
            {/* <Link href={"/temperature"}>
              <li>Temporary</li>
            </Link>
            <Link href={"/light"}>
              <li>Light</li>
            </Link>
            <Link href={"/humidity"}>
              <li>Humidity</li>
            </Link> */}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};
export default HeaderLayout;
