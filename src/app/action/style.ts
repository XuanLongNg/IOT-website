import { makeStyles } from "tss-react/mui";

export default makeStyles()({
  root: {
    width: "80%",
    margin: "3em auto",
    // backgroundColor: "rgba(255, 255, 255,

    "& h5": {
      margin: "1em auto",
    },
    "& .MuiDataGrid-columnHeaderTitleContainer": {
      justifyContent: "start!important",
    },
    "& .MuiDataGrid-cell": {
      justifyContent: "start!important",
    },
    "& p": {
      margin: "0",
    },
  },
});
