import { makeStyles } from "tss-react/mui";

export default makeStyles()({
  "style-home-page": {
    height: "90vh!important",
    padding: "0 10% 10vh",
    margin: "0 auto",
    backgroundColor: "#EBEDEF",
    "& .breadcrumbs": {
      padding: "1em 0 0",
    },
    "& .card-mini-dashboard": {
      padding: "1em 0 2em",
      "&>div": {
        width: "23%",
        "& canvas": {
          // height: "10vh!important",
        },
      },
    },
    "& .chart": {
      width: "60%",
    },
    "& .btn-action": {
      width: "20%",
      padding: "0 0 0 2em",
      "& .btn-light, .btn-temperature": {
        backgroundColor: "white",
        borderRadius: "12px",
        height: "49%",
        boxShadow: "0 0 5px rgba(0,0,0,0.4)",
      },
      "& .btn-temperature": {
        marginTop: "2.5%",
      },
      "& .btn-light": {
        marginBottom: "2.5%",
      },
    },
    "& .warning": {
      width: "20%",
      marginLeft: "1em",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 0 5px rgba(0,0,0,0.4)",
    },
  },
});
