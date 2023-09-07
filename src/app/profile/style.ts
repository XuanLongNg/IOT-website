import { makeStyles } from "tss-react/mui";

export default makeStyles()({
  root: {
    height: "60vh",
    background: 'url("/images/bg.jpg") no-repeat center/cover',
    // filter:  "grayscale(100%)",
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0,0,0.5)",
    },
    "& .profile-avatar ": {
      position: "absolute",
      left: "50%",
      top: "25%",
      transform: "translateX(-50%)",
    },
    "& .profile-information": {
      position: "absolute",
      left: "50%",
      top: "55%",
      width: "20em",
      transform: "translateX(-50%)",

      "& h3": {
        fontSize: "2em",
        color: "white",
      },
      h6: {
        color: "white",
      },
      "& .container-icon": {
        "& svg": {
          color: "white",
          fontSize: "40px",
          transition: "all 0.5s ease",
          "&:hover": {
            scale: "1.3",
          },
        },
      },
    },
  },
});
